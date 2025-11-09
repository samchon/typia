import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_validateReturn_ArraySimpleProtobuf = (): void =>
  _test_functional_validateReturn("ArraySimpleProtobuf")(ArraySimpleProtobuf)(
    (p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) =>
      typia.functional.validateReturn(p),
  );
