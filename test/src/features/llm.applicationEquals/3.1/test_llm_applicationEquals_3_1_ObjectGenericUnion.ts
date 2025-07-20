import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_llm_applicationEquals_3_1_ObjectGenericUnion = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "ObjectGenericUnion",
    factory: ObjectGenericUnion,
  })(
    typia.llm.application<
      ObjectGenericUnionApplication,
      "3.1",
      { equals:; true }
    >(),
  );

interface ObjectGenericUnionApplication {
  insert(p: { first: ObjectGenericUnion }): Promise<void>;
  reduce(p: {
    first: ObjectGenericUnion;
    second: ObjectGenericUnion | null;
  }): Promise<ObjectGenericUnion>;
  coalesce(p: {
    first: ObjectGenericUnion | null;
    second: ObjectGenericUnion | null;
    third?: ObjectGenericUnion | null;
  }): Promise<ObjectGenericUnion | null>;
}
