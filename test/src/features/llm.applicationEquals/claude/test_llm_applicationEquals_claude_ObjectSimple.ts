import typia from "typia";
import { ObjectSimple } from "../../../structures/ObjectSimple";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ObjectSimple = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectSimple",
    factory: ObjectSimple
  })(
    typia.llm.application<ObjectSimpleApplication, "claude", { equals: true }>(),
  );

interface ObjectSimpleApplication {
  insert(p: { first: ObjectSimple }): Promise<void>;
  reduce(p: { first: ObjectSimple, second: ObjectSimple | null }): Promise<ObjectSimple>;
  coalesce(p: {
    first: ObjectSimple | null,
    second: ObjectSimple | null,
    third?: ObjectSimple | null,
  }): Promise<ObjectSimple | null>;
}