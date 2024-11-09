import typia from "typia";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectUnionNonPredictable = 
  _test_llm_schema({
    model: "3.1",
    name: "ObjectUnionNonPredictable",
  })(typia.llm.schema<ObjectUnionNonPredictable, "3.1">());