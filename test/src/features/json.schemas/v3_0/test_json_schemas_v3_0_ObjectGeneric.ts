import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";

export const test_json_schemas_v3_0_ObjectGeneric = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectGeneric",
  })(typia.json.schemas<[ObjectGeneric], "3.0">());
