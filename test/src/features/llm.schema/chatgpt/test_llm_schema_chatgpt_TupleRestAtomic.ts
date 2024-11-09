import typia from "typia";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TupleRestAtomic = 
  _test_llm_schema({
    model: "chatgpt",
    name: "TupleRestAtomic",
  })(typia.llm.schema<TupleRestAtomic, "chatgpt">());