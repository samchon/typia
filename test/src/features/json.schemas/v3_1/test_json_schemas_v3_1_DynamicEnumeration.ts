import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_schemas_v3_1_DynamicEnumeration = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "DynamicEnumeration",
  })(typia.json.schemas<[DynamicEnumeration], "3.1">());
