import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_standardSchema_createValidate_TypeTagInfinite =
  _test_standardSchema_validate("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )(typia.createValidate<TypeTagInfinite>());
