import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_assertReturnAsync_ArraySimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)(
      "ArraySimpleProtobufNullable",
    )(ArraySimpleProtobufNullable)(
      (
        p: (
          input: ArraySimpleProtobufNullable,
        ) => Promise<ArraySimpleProtobufNullable>,
      ) => typia.functional.assertReturn(p),
    );
