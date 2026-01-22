import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_createAssertCustom_ArraySimpleProtobufNullable = (): void =>
  _test_assert(CustomGuardError)(
    "ArraySimpleProtobufNullable",
  )<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)(
    typia.createAssert<ArraySimpleProtobufNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
