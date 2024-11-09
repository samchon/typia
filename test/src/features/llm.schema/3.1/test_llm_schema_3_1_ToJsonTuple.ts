import typia from "typia";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ToJsonTuple = 
  _test_llm_schema({
    model: "3.1",
    name: "ToJsonTuple",
  })(typia.llm.schema<ToJsonTuple, "3.1">());