import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_isReturnAsync_ArraySimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_isReturnAsync("ArraySimpleProtobufNullable")(
      ArraySimpleProtobufNullable,
    )(
      (
        p: (
          input: ArraySimpleProtobufNullable,
        ) => Promise<ArraySimpleProtobufNullable>,
      ) => typia.functional.isReturn(p),
    );
