import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_standardSchema_createValidate_ArrayRepeatedOptional =
  (): void =>
    _test_standardSchema_validate(
      "ArrayRepeatedOptional",
    )<ArrayRepeatedOptional>(ArrayRepeatedOptional)(
      typia.createValidate<ArrayRepeatedOptional>(),
    );
