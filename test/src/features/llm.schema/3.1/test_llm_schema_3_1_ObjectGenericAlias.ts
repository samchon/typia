import typia from "typia";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectGenericAlias = 
  _test_llm_schema({
    model: "3.1",
    name: "ObjectGenericAlias",
  })(typia.llm.schema<ObjectGenericAlias, "3.1">());