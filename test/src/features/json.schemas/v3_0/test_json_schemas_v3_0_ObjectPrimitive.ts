import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_schemas_v3_0_ObjectPrimitive = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectPrimitive",
  })(typia.json.schemas<[ObjectPrimitive], "3.0">());
