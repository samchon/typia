import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_standardSchema_createValidate_TypeTagPattern =
  _test_standardSchema_validate("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )(typia.createValidate<TypeTagPattern>());
