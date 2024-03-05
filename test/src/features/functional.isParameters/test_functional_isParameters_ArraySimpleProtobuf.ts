import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_isParameters_ArraySimpleProtobuf =
  _test_functional_isParameters("ArraySimpleProtobuf")(ArraySimpleProtobuf)(
    (p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) =>
      typia.functional.isParameters(p),
  );
