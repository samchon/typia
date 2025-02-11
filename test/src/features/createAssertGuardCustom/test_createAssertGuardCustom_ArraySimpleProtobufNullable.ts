import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_createAssertGuardCustom_ArraySimpleProtobufNullable =
  _test_assertGuard(CustomGuardError)(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)(
    typia.createAssertGuard<ArraySimpleProtobufNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
