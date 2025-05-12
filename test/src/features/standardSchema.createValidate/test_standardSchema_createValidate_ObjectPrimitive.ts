import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_standardSchema_createValidate_ObjectPrimitive =
  _test_standardSchema_validate("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )(typia.createValidate<ObjectPrimitive>());
