import typia from "typia";
import { DynamicSimple } from "../../../structures/DynamicSimple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_DynamicSimple = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "DynamicSimple",
  })(typia.llm.schema<DynamicSimple, "3.0">());