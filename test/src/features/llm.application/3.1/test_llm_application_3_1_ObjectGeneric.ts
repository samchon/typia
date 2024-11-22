import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_llm_application_3_1_ObjectGeneric = _test_llm_application({
  model: "3.1",
  name: "ObjectGeneric",
})(typia.llm.application<ObjectGenericApplication, "3.1">());

interface ObjectGenericApplication {
  insert(first: ObjectGeneric): Promise<void>;
  reduce(
    first: ObjectGeneric,
    second: ObjectGeneric | null,
  ): Promise<ObjectGeneric>;
  coalesce(
    first: ObjectGeneric | null,
    second: ObjectGeneric | null,
    third?: ObjectGeneric | null,
  ): Promise<ObjectGeneric | null>;
}
