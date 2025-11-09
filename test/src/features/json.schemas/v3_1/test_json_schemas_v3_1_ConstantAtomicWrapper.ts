import typia from "typia";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ConstantAtomicWrapper = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ConstantAtomicWrapper", 
  })(typia.json.schemas<[ConstantAtomicWrapper], "3.1">());