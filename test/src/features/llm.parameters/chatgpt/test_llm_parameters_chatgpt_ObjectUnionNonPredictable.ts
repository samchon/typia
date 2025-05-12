import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_llm_parameters_chatgpt_ObjectUnionNonPredictable =
  _test_llm_parameters({
    model: "chatgpt",
    name: "ObjectUnionNonPredictable",
  })(typia.llm.parameters<ObjectUnionNonPredictableParameters, "chatgpt">());

interface ObjectUnionNonPredictableParameters {
  regular: ObjectUnionNonPredictable;
  nullable: ObjectUnionNonPredictable | null;
  optional: ObjectUnionNonPredictable | undefined;
  faint: ObjectUnionNonPredictable | null | undefined;
  array: Array<ObjectUnionNonPredictable>;
}
