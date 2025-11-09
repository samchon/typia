import typia from "typia";

import { _test_misc_validateClone } from "../../internal/_test_misc_validateClone";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_misc_createValidateClone_ObjectPropertyNullable = (): void =>
  _test_misc_validateClone("ObjectPropertyNullable")<ObjectPropertyNullable>(
    ObjectPropertyNullable,
  )(typia.misc.createValidateClone<ObjectPropertyNullable>());
