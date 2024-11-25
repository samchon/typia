import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_application_llama_ObjectNullable = _test_llm_application({
  model: "llama",
  name: "ObjectNullable",
})(typia.llm.application<ObjectNullableApplication, "llama">());

interface ObjectNullableApplication {
  insert(first: ObjectNullable): Promise<void>;
  reduce(
    first: ObjectNullable,
    second: ObjectNullable | null,
  ): Promise<ObjectNullable>;
  coalesce(
    first: ObjectNullable | null,
    second: ObjectNullable | null,
    third?: ObjectNullable | null,
  ): Promise<ObjectNullable | null>;
}
