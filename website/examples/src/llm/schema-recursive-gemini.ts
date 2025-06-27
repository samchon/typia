import typia, { tags } from "typia";

typia.llm.schema<IDepartment, "gemini">();

interface IDepartment {
  id: string & tags.Format<"uuid">;
  name: string;
  department: IDepartment[];
}
