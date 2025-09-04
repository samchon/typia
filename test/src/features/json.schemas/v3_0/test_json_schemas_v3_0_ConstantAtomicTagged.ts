import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_json_schemas_v3_0_ConstantAtomicTagged = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ConstantAtomicTagged",
  })(typia.json.schemas<[ConstantAtomicTagged], "3.0">());
