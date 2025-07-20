import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_schemas_v3_0_ConstantConstEnumeration = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ConstantConstEnumeration",
  })(typia.json.schemas<[ConstantConstEnumeration], "3.0">());
