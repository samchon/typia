import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_json_createIsParse_ObjectPropertyNullable = (): void =>
  _test_json_isParse("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )(typia.json.createIsParse<ObjectPropertyNullable>());
