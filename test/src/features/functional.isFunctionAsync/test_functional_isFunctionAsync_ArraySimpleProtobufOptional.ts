import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_isFunctionAsync_ArraySimpleProtobufOptional =
  _test_functional_isFunctionAsync("ArraySimpleProtobufOptional")(
    ArraySimpleProtobufOptional,
  )(
    (
      p: (
        input: ArraySimpleProtobufOptional,
      ) => Promise<ArraySimpleProtobufOptional>,
    ) => typia.functional.isFunction(p),
  );
