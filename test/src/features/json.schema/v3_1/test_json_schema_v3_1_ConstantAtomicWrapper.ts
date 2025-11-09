import typia from "typia";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ConstantAtomicWrapper = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ConstantAtomicWrapper", 
  })(typia.json.schema<ConstantAtomicWrapper, "3.1">());