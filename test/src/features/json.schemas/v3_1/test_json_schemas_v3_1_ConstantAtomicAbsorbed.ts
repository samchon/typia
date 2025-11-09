import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_json_schemas_v3_1_ConstantAtomicAbsorbed = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ConstantAtomicAbsorbed",
  })(typia.json.schemas<[ConstantAtomicAbsorbed], "3.1">());
