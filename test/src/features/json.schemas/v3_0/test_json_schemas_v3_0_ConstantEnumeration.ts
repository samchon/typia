import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_json_schemas_v3_0_ConstantEnumeration = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ConstantEnumeration",
  })(typia.json.schemas<[ConstantEnumeration], "3.0">());
