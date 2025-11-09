import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_json_schemas_v3_0_ObjectDynamic = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectDynamic",
  })(typia.json.schemas<[ObjectDynamic], "3.0">());
