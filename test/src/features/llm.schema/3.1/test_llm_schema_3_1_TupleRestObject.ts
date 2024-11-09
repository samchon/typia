import typia from "typia";
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TupleRestObject = 
  _test_llm_schema({
    model: "3.1",
    name: "TupleRestObject",
  })(typia.llm.schema<TupleRestObject, "3.1">());