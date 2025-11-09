import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_llm_schema_3_0_ObjectUnionNonPredictable = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ObjectUnionNonPredictable",
  })(typia.llm.schema<ObjectUnionNonPredictable, "3.0">());
