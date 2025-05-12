import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_standardSchema_createValidate_ArrayRecursive =
  _test_standardSchema_validate("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )(typia.createValidate<ArrayRecursive>());
