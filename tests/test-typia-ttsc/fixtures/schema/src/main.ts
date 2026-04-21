import typia, { tags } from "typia";
interface Member { id: string; email: string & tags.Format<"email">; age: number & tags.Minimum<0>; }
export const memberSchema = typia.json.schema<Member>();
export const stringSchema = typia.json.schema<string>();
