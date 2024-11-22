import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_llm_application_3_1_ObjectPropertyNullable =
  _test_llm_application({
    model: "3.1",
    name: "ObjectPropertyNullable",
  })(typia.llm.application<ObjectPropertyNullableApplication, "3.1">());

interface ObjectPropertyNullableApplication {
  insert(first: ObjectPropertyNullable): Promise<void>;
  reduce(
    first: ObjectPropertyNullable,
    second: ObjectPropertyNullable | null,
  ): Promise<ObjectPropertyNullable>;
  coalesce(
    first: ObjectPropertyNullable | null,
    second: ObjectPropertyNullable | null,
    third?: ObjectPropertyNullable | null,
  ): Promise<ObjectPropertyNullable | null>;
}
