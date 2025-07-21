import {
  ClaudeTypeChecker,
  IChatGptSchema,
  IClaudeSchema,
  IGeminiSchema,
} from "@samchon/openapi";
import typia, { tags } from "typia";

interface IMember {
  name: string;
  age: number & tags.Type<"uint32">;
}
class Membership {
  public information(member: IMember): void {
    member;
  }
}
const separate = (
  schema: IChatGptSchema | IClaudeSchema | IGeminiSchema,
): boolean => ClaudeTypeChecker.isInteger(schema);

typia.llm.controller<Membership, "claude", { equals: true }>(
  "membership",
  new Membership(),
  {
    separate,
  },
);
