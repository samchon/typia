import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_standardSchema_createValidate_FunctionalProperty =
  _test_standardSchema_validate("FunctionalProperty")<FunctionalProperty>(
    FunctionalProperty,
  )(typia.createValidate<FunctionalProperty>());
