import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_standardSchema_createValidate_ArrayAtomicAlias =
  _test_standardSchema_validate("ArrayAtomicAlias")<ArrayAtomicAlias>(
    ArrayAtomicAlias,
  )(typia.createValidate<ArrayAtomicAlias>());
