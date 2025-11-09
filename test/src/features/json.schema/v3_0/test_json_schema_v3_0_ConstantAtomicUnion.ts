import typia from "typia";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ConstantAtomicUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ConstantAtomicUnion", 
  })(typia.json.schema<ConstantAtomicUnion, "3.0">());