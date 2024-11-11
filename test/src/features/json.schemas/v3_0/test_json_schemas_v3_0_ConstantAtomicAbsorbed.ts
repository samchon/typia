import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_json_schemas_v3_0_ConstantAtomicAbsorbed = _test_json_schemas(
  {
    version: "3.0",
    name: "ConstantAtomicAbsorbed",
  },
)(typia.json.schemas<[ConstantAtomicAbsorbed], "3.0">());
