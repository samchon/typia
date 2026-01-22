import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_json_schemas_v3_1_ToJsonUnion = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ToJsonUnion",
  })(typia.json.schemas<[ToJsonUnion], "3.1">());
