import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";

export const test_llm_application_3_1_ObjectGenericUnion =
  _test_llm_application({
    model: "3.1",
    name: "ObjectGenericUnion",
  })(typia.llm.application<ObjectGenericUnionApplication, "3.1">());

interface ObjectGenericUnionApplication {
  insert(first: ObjectGenericUnion): Promise<void>;
  reduce(
    first: ObjectGenericUnion,
    second: ObjectGenericUnion | null,
  ): Promise<ObjectGenericUnion>;
  coalesce(
    first: ObjectGenericUnion | null,
    second: ObjectGenericUnion | null,
    third?: ObjectGenericUnion | null,
  ): Promise<ObjectGenericUnion | null>;
}
