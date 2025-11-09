import typia from "typia";

import { _test_json_stringify } from "../../internal/_test_json_stringify";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_json_createStringify_ObjectUnionDouble = (): void =>
  _test_json_stringify("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )(typia.json.createStringify<ObjectUnionDouble>());
