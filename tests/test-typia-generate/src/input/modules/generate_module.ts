import typia from "typia";

interface IModuleTemplate {
  id: string;
  count: number;
  active: boolean;
}

export const is = typia.createIs<IModuleTemplate>();
export const assert = typia.createAssert<IModuleTemplate>();
