import typia from "typia";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_claude_ObjectUndefined = (): void =>
  _test_llm_application({
    model: "claude",
    name: "ObjectUndefined",
    factory: ObjectUndefined
  })(
    typia.llm.application<ObjectUndefinedApplication, "claude">(),
  );

interface ObjectUndefinedApplication {
  insert(p: { first: ObjectUndefined }): Promise<void>;
  reduce(p: { first: ObjectUndefined, second: ObjectUndefined | null }): Promise<ObjectUndefined>;
  coalesce(p: {
    first: ObjectUndefined | null,
    second: ObjectUndefined | null,
    third?: ObjectUndefined | null,
  }): Promise<ObjectUndefined | null>;
}