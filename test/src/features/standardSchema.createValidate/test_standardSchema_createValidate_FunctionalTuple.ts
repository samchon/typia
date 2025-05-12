import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { FunctionalTuple } from "../../structures/FunctionalTuple";

export const test_standardSchema_createValidate_FunctionalTuple =
  _test_standardSchema_validate("FunctionalTuple")<FunctionalTuple>(
    FunctionalTuple,
  )(typia.createValidate<FunctionalTuple>());
