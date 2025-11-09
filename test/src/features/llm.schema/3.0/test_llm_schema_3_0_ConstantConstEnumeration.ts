import typia from "typia";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ConstantConstEnumeration = (): void =>
  _test_llm_schema({
    model: "3.0",
    name: "ConstantConstEnumeration",
  })(typia.llm.schema<ConstantConstEnumeration, "3.0">());