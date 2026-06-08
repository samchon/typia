import typia from "typia";

interface IProjectDirectoryTemplate {
  id: string;
  tags: string[];
}

export const isProjectDirectory = typia.createIs<IProjectDirectoryTemplate>();
