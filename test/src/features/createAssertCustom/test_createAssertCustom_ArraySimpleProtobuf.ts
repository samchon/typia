import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArraySimpleProtobuf = _test_assert(CustomGuardError)(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(
    ArraySimpleProtobuf
)(typia.createAssert<ArraySimpleProtobuf>((p) => new CustomGuardError(p)));
