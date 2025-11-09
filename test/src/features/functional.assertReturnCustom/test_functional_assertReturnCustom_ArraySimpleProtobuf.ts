import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_assertReturnCustom_ArraySimpleProtobuf =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)("ArraySimpleProtobuf")(
      ArraySimpleProtobuf,
    )((p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
