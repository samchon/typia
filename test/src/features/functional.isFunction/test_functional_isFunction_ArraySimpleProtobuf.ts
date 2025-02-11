import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_isFunction_ArraySimpleProtobuf =
  _test_functional_isFunction("ArraySimpleProtobuf")(ArraySimpleProtobuf)(
    (p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) =>
      typia.functional.isFunction(p),
  );
