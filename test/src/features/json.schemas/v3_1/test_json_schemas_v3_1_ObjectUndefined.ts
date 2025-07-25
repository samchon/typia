import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";

export const test_json_schemas_v3_1_ObjectUndefined = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ObjectUndefined",
  })(typia.json.schemas<[ObjectUndefined], "3.1">());
