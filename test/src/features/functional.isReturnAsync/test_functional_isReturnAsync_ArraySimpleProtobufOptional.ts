import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_isReturnAsync_ArraySimpleProtobufOptional =
  _test_functional_isReturnAsync("ArraySimpleProtobufOptional")(
    ArraySimpleProtobufOptional,
  )(
    (
      p: (
        input: ArraySimpleProtobufOptional,
      ) => Promise<ArraySimpleProtobufOptional>,
    ) => typia.functional.isReturn(p),
  );
