import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ArraySimpleProtobufNullable =
  _test_assertGuard(CustomGuardError)(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)((input) =>
    typia.assertGuard<ArraySimpleProtobufNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
