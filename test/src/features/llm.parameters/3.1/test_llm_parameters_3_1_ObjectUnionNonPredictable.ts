import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_llm_parameters_3_1_ObjectUnionNonPredictable =
  _test_llm_parameters({
    model: "3.1",
    name: "ObjectUnionNonPredictable",
  })(typia.llm.parameters<ObjectUnionNonPredictableParameters, "3.1">());

interface ObjectUnionNonPredictableParameters {
  regular: ObjectUnionNonPredictable;
  nullable: ObjectUnionNonPredictable | null;
  optional: ObjectUnionNonPredictable | undefined;
  faint: ObjectUnionNonPredictable | null | undefined;
  array: Array<ObjectUnionNonPredictable>;
}
