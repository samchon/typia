import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionDouble } from "../../../structures/ObjectUnionDouble";

export const test_llm_application_llama_ObjectUnionDouble =
  _test_llm_application({
    model: "llama",
    name: "ObjectUnionDouble",
  })(typia.llm.application<ObjectUnionDoubleApplication, "llama">());

interface ObjectUnionDoubleApplication {
  insert(first: ObjectUnionDouble): Promise<void>;
  reduce(
    first: ObjectUnionDouble,
    second: ObjectUnionDouble | null,
  ): Promise<ObjectUnionDouble>;
  coalesce(
    first: ObjectUnionDouble | null,
    second: ObjectUnionDouble | null,
    third?: ObjectUnionDouble | null,
  ): Promise<ObjectUnionDouble | null>;
}
