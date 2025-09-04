import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_json_schema_v3_1_ConstantAtomicUnion = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ConstantAtomicUnion",
  })(typia.json.schema<ConstantAtomicUnion, "3.1">());
