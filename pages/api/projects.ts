import type { NextApiRequest, NextApiResponse } from "next";

import projects from "../../data/projects.json"

export type IProjects = typeof projects;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProjects>
) {
  res.status(200).json(projects);
}