import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_assertReturnCustom_ArraySimpleProtobufNullable =
  _test_functional_assertReturn(CustomGuardError)(
    "ArraySimpleProtobufNullable",
  )(ArraySimpleProtobufNullable)(
    (p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
