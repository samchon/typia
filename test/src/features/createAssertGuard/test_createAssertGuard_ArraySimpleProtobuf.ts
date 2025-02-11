import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ArraySimpleProtobuf = _test_assertGuard(TypeGuardError)(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(
    ArraySimpleProtobuf
)(typia.createAssertGuard<ArraySimpleProtobuf>());
