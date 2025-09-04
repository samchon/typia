import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_json_schema_v3_0_ConstantAtomicAbsorbed = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ConstantAtomicAbsorbed",
  })(typia.json.schema<ConstantAtomicAbsorbed, "3.0">());
