import typia from "typia";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ObjectOptional = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ObjectOptional",
    factory: ObjectOptional
  })(
    typia.llm.application<ObjectOptionalApplication, "claude", { equals: true }>(),
  );

interface ObjectOptionalApplication {
  insert(p: { first: ObjectOptional }): Promise<void>;
  reduce(p: { first: ObjectOptional, second: ObjectOptional | null }): Promise<ObjectOptional>;
  coalesce(p: {
    first: ObjectOptional | null,
    second: ObjectOptional | null,
    third?: ObjectOptional | null,
  }): Promise<ObjectOptional | null>;
}