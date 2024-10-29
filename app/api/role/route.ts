/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import { roleSchema } from '../../../validation/roleValidation';
import role from '@/models/Role';
import dbConnect from '@/utils/db';
import Role from '@/models/Role';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const roles = await role.find({});
        res.status(200).json({ success: true, data: roles });
      } catch (error:any) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'POST':
      try {
        const { error } = roleSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ success: false, error: error.details[0].message });
        }

        const role = await Role.create(req.body);
        res.status(201).json({ success: true, data: role });
      } catch (error:any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
