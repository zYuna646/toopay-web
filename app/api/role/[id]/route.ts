/* eslint-disable @typescript-eslint/no-explicit-any */
import Role from '@/models/Role';
import dbConnect from '@/utils/db';
import { roleSchema } from '@/validation/roleValidation';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      try {
        const role = await Role.findById(id);
        if (!role) {
          return res.status(404).json({ success: false, error: 'Role not found' });
        }
        res.status(200).json({ success: true, data: role });
      } catch (error:any) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    case 'PUT':
      try {
        const { error } = roleSchema.validate(req.body);
        if (error) {
          return res.status(400).json({ success: false, error: error.details[0].message });
        }

        const role = await Role.findByIdAndUpdate(id, req.body, { new: true });
        if (!role) {
          return res.status(404).json({ success: false, error: 'Role not found' });
        }
        res.status(200).json({ success: true, data: role });
      } catch (error:any) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;

    case 'DELETE':
      try {
        const role = await Role.findByIdAndDelete(id);
        if (!role) {
          return res.status(404).json({ success: false, error: 'Role not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error:any) {
        res.status(500).json({ success: false, error: error.message });
      }
      break;

    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}
