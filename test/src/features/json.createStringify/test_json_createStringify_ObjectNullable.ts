import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectNullable } from "../../structures/ObjectNullable";

export const test_json_createStringify_ObjectNullable = _test_json_stringify(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)(typia.json.createStringify<ObjectNullable>());
