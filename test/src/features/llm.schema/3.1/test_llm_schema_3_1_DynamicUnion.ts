import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_DynamicUnion = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "DynamicUnion",
  })(typia.llm.schema<DynamicUnion, "3.1">({}));