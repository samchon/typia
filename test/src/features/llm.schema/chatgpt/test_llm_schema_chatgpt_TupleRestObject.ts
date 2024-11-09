import typia from "typia";
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TupleRestObject = 
  _test_llm_schema({
    model: "chatgpt",
    name: "TupleRestObject",
  })(typia.llm.schema<TupleRestObject, "chatgpt">());