import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_json_schemas_v3_0_ObjectGenericAlias = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectGenericAlias",
  })(typia.json.schemas<[ObjectGenericAlias], "3.0">());
