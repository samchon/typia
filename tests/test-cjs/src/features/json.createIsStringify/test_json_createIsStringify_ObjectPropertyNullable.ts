import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createIsStringify_ObjectPropertyNullable = (): void =>
  _test_json_isStringify("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )(typia.json.createIsStringify<ObjectPropertyNullable>());
