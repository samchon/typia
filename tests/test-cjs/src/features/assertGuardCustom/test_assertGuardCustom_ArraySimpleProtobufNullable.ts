import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_assertGuardCustom_ArraySimpleProtobufNullable = (): void =>
  _test_assertGuard(CustomGuardError)(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)((input) =>
    typia.assertGuard<ArraySimpleProtobufNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
