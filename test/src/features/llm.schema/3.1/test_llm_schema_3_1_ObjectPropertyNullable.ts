import typia from "typia";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ObjectPropertyNullable = 
  _test_llm_schema({
    model: "3.1",
    name: "ObjectPropertyNullable",
  })(typia.llm.schema<ObjectPropertyNullable, "3.1">());