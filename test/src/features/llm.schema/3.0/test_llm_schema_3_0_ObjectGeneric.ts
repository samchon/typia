import typia from "typia";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ObjectGeneric = 
  _test_llm_schema({
    model: "3.0",
    name: "ObjectGeneric",
  })(typia.llm.schema<ObjectGeneric, "3.0">());