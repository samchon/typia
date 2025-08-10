import typia from "typia";

interface Something {
  /** @exclusiveMinimum 3 */
  exclusiveMinimum: number;

  /** @type uint32 */
  uint32: number;
}

const p = typia.llm.parameters<Something, "claude">();

console.log(JSON.stringify(p, null, 2));
