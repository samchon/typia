import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_schema_v3_1_ConstantAtomicSimple = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ConstantAtomicSimple",
  })(typia.json.schema<ConstantAtomicSimple, "3.1">());
