import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_json_schemas_v3_0_ObjectSimple = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ObjectSimple",
  })(typia.json.schemas<[ObjectSimple], "3.0">());
