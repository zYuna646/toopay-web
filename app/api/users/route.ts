/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../models/User';
import dbConnect from '@/utils/db';
import { userSchema } from '@/validation/userValidation';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const users = await User.find({}).populate('role');
        res.status(200).json({ success: true, data: users });
      } catch (error:any) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const { error } = userSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ success: false, error: error.details[0].message });
        }

        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error:any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
