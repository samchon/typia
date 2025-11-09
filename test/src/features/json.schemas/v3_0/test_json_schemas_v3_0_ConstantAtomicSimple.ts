import typia from "typia";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ConstantAtomicSimple = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ConstantAtomicSimple", 
  })(typia.json.schemas<[ConstantAtomicSimple], "3.0">());