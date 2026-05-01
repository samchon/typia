import typia from "typia";

interface Member {
  id: string;
  name: string;
  email?: string;
}

const $defs = {};
export { $defs };
export const schema = typia.llm.schema<Member>($defs);
export const parameters = typia.llm.parameters<Member>();
