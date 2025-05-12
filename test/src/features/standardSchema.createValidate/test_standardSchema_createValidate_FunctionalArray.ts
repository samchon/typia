import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { FunctionalArray } from "../../structures/FunctionalArray";

export const test_standardSchema_createValidate_FunctionalArray =
  _test_standardSchema_validate("FunctionalArray")<FunctionalArray>(
    FunctionalArray,
  )(typia.createValidate<FunctionalArray>());
