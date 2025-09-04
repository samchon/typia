import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_assertReturn_ArraySimpleProtobuf = (): void =>
  _test_functional_assertReturn(TypeGuardError)("ArraySimpleProtobuf")(
    ArraySimpleProtobuf,
  )((p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) =>
    typia.functional.assertReturn(p),
  );
