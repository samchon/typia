import typia from "typia";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ObjectNullable = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectNullable",
    factory: ObjectNullable
  })(
    typia.llm.application<ObjectNullableApplication, "claude", { equals: true }>(),
  );

interface ObjectNullableApplication {
  insert(p: { first: ObjectNullable }): Promise<void>;
  reduce(p: { first: ObjectNullable, second: ObjectNullable | null }): Promise<ObjectNullable>;
  coalesce(p: {
    first: ObjectNullable | null,
    second: ObjectNullable | null,
    third?: ObjectNullable | null,
  }): Promise<ObjectNullable | null>;
}