import typia from "typia";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectGenericUnion = 
  _test_llm_schema({
    model: "3.1",
    name: "ObjectGenericUnion",
  })(typia.llm.schema<ObjectGenericUnion, "3.1">());