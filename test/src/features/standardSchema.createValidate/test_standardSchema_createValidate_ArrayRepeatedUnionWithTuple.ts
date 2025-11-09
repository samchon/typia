import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_standardSchema_createValidate_ArrayRepeatedUnionWithTuple =
  (): void =>
    _test_standardSchema_validate(
      "ArrayRepeatedUnionWithTuple",
    )<ArrayRepeatedUnionWithTuple>(ArrayRepeatedUnionWithTuple)(
      typia.createValidate<ArrayRepeatedUnionWithTuple>(),
    );
