import type { NextApiRequest, NextApiResponse } from "next";

import skills from "../../data/skills.json";

export type ISkills = {skills: string[]}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(skills);
}