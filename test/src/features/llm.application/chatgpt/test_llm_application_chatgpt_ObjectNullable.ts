import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_application_chatgpt_ObjectNullable =
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectNullable",
    factory: ObjectNullable,
  })(typia.llm.application<ObjectNullableApplication, "chatgpt">());

interface ObjectNullableApplication {
  insert(p: { first: ObjectNullable }): Promise<void>;
  reduce(p: {
    first: ObjectNullable;
    second: ObjectNullable | null;
  }): Promise<ObjectNullable>;
  coalesce(p: {
    first: ObjectNullable | null;
    second: ObjectNullable | null;
    third?: ObjectNullable | null;
  }): Promise<ObjectNullable | null>;
}
