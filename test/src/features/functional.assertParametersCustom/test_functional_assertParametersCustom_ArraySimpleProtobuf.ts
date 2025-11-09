import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_assertParametersCustom_ArraySimpleProtobuf =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ArraySimpleProtobuf")(
      ArraySimpleProtobuf,
    )((p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
