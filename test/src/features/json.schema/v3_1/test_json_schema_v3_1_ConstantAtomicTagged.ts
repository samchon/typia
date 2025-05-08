import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_json_schema_v3_1_ConstantAtomicTagged = _test_json_schema({
  version: "3.1",
  name: "ConstantAtomicTagged",
})(typia.json.schema<ConstantAtomicTagged, "3.1">());
