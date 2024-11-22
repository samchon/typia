import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_llm_application_chatgpt_ObjectUnionNonPredictable =
  _test_llm_application({
    model: "chatgpt",
    name: "ObjectUnionNonPredictable",
  })(typia.llm.application<ObjectUnionNonPredictableApplication, "chatgpt">());

interface ObjectUnionNonPredictableApplication {
  insert(first: ObjectUnionNonPredictable): Promise<void>;
  reduce(
    first: ObjectUnionNonPredictable,
    second: ObjectUnionNonPredictable | null,
  ): Promise<ObjectUnionNonPredictable>;
  coalesce(
    first: ObjectUnionNonPredictable | null,
    second: ObjectUnionNonPredictable | null,
    third?: ObjectUnionNonPredictable | null,
  ): Promise<ObjectUnionNonPredictable | null>;
}
