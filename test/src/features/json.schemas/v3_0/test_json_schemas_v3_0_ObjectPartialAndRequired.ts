import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_json_schemas_v3_0_ObjectPartialAndRequired = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectPartialAndRequired",
  })(typia.json.schemas<[ObjectPartialAndRequired], "3.0">());
