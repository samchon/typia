import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_json_schema_v3_0_ConstantAtomicTagged = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ConstantAtomicTagged",
  })(typia.json.schema<ConstantAtomicTagged, "3.0">());
