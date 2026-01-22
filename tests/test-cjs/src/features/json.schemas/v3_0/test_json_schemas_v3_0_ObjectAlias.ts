import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_json_schemas_v3_0_ObjectAlias = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectAlias",
  })(typia.json.schemas<[ObjectAlias], "3.0">());
