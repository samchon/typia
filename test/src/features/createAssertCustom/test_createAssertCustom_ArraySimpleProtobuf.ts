import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_createAssertCustom_ArraySimpleProtobuf = (): void =>
  _test_assert(CustomGuardError)("ArraySimpleProtobuf")<ArraySimpleProtobuf>(
    ArraySimpleProtobuf,
  )(typia.createAssert<ArraySimpleProtobuf>((p) => new CustomGuardError(p)));
