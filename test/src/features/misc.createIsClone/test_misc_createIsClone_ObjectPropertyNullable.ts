import typia from "typia";

import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_createIsClone_ObjectPropertyNullable = (): void =>
  _test_misc_isClone("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )(typia.misc.createIsClone<ObjectPropertyNullable>());
