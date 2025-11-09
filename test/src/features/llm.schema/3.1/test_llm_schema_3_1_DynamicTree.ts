import typia from "typia";
import { DynamicTree } from "../../../structures/DynamicTree";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_DynamicTree = (): void =>
  _test_llm_schema({
    model: "3.1",
    name: "DynamicTree",
  })(typia.llm.schema<DynamicTree, "3.1">({}));