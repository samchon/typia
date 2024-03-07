import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_isReturnAsync_ArraySimpleProtobuf =
  _test_functional_isReturnAsync("ArraySimpleProtobuf")(ArraySimpleProtobuf)(
    (p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
      typia.functional.isReturn(p),
  );
