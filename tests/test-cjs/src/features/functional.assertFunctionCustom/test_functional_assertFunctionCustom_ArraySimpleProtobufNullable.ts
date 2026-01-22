import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_assertFunctionCustom_ArraySimpleProtobufNullable =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)(
      "ArraySimpleProtobufNullable",
    )(ArraySimpleProtobufNullable)(
      (
        p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
