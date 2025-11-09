import typia from "typia";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_ObjectGenericUnion = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ObjectGenericUnion",
    factory: ObjectGenericUnion
  })(
    typia.llm.application<ObjectGenericUnionApplication, "gemini", { equals: true }>(),
  );

interface ObjectGenericUnionApplication {
  insert(p: { first: ObjectGenericUnion }): Promise<void>;
  reduce(p: { first: ObjectGenericUnion, second: ObjectGenericUnion | null }): Promise<ObjectGenericUnion>;
  coalesce(p: {
    first: ObjectGenericUnion | null,
    second: ObjectGenericUnion | null,
    third?: ObjectGenericUnion | null,
  }): Promise<ObjectGenericUnion | null>;
}