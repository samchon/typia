import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_standardSchema_createValidate_FunctionalArrayUnion =
  _test_standardSchema_validate("FunctionalArrayUnion")<FunctionalArrayUnion>(
    FunctionalArrayUnion,
  )(typia.createValidate<FunctionalArrayUnion>());
