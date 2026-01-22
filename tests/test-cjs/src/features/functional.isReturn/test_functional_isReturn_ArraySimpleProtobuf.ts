import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_isReturn_ArraySimpleProtobuf = (): void =>
  _test_functional_isReturn("ArraySimpleProtobuf")(ArraySimpleProtobuf)(
    (p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) =>
      typia.functional.isReturn(p),
  );
