import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_validate_ArrayRepeatedOptional = (): void =>
  _test_validate("ArrayRepeatedOptional")<ArrayRepeatedOptional>(
    ArrayRepeatedOptional,
  )((input) => typia.validate<ArrayRepeatedOptional>(input));
