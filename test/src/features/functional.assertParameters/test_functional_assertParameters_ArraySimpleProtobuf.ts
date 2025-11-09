import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_assertParameters_ArraySimpleProtobuf = (): void =>
  _test_functional_assertParameters(TypeGuardError)("ArraySimpleProtobuf")(
    ArraySimpleProtobuf,
  )((p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) =>
    typia.functional.assertParameters(p),
  );
