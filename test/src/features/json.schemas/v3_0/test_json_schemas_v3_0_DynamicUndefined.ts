import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_json_schemas_v3_0_DynamicUndefined = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "DynamicUndefined",
  })(typia.json.schemas<[DynamicUndefined], "3.0">());
