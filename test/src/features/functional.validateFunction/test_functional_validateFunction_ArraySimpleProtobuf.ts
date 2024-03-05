import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_validateFunction_ArraySimpleProtobuf =
  _test_functional_validateFunction("ArraySimpleProtobuf")(ArraySimpleProtobuf)(
    (p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) =>
      typia.functional.validateFunction(p),
  );
