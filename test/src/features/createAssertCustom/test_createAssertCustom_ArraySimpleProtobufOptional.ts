import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_createAssertCustom_ArraySimpleProtobufOptional = _test_assert(
  CustomGuardError,
)("ArraySimpleProtobufOptional")<ArraySimpleProtobufOptional>(
  ArraySimpleProtobufOptional,
)(
  typia.createAssert<ArraySimpleProtobufOptional>(
    (p) => new CustomGuardError(p),
  ),
);
