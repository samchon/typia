import typia from "typia";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_ObjectGenericUnion = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "ObjectGenericUnion",
    factory: ObjectGenericUnion
  })(
    typia.llm.application<ObjectGenericUnionApplication, "3.0">(),
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