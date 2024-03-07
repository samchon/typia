import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectSimpleProtobufOptional = _test_assert(
  CustomGuardError,
)("ObjectSimpleProtobufOptional")<ObjectSimpleProtobufOptional>(
  ObjectSimpleProtobufOptional,
)((input) =>
  typia.assert<ObjectSimpleProtobufOptional>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
