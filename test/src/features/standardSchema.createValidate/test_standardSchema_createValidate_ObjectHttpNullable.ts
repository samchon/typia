import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_standardSchema_createValidate_ObjectHttpNullable =
  _test_standardSchema_validate("ObjectHttpNullable")<ObjectHttpNullable>(
    ObjectHttpNullable,
  )(typia.createValidate<ObjectHttpNullable>());
