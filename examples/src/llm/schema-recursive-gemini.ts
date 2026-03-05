import typia, { ILlmSchema, tags } from "typia";

const $defs: Record<string, ILlmSchema> = {};
typia.llm.schema<IDepartment>($defs);

interface IDepartment {
  id: string & tags.Format<"uuid">;
  name: string;
  department: IDepartment[];
}
