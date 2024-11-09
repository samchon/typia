import typia from "typia";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectGenericUnion = 
  _test_llm_schema({
    model: "3.0",
    name: "ObjectGenericUnion",
  })(typia.llm.schema<ObjectGenericUnion, "3.0">());