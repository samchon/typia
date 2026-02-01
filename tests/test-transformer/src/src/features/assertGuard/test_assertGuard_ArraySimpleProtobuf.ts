import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_assertGuard_ArraySimpleProtobuf = (): void => _test_assertGuard(TypeGuardError)(
    "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(
    ArraySimpleProtobuf
)((input) => typia.assertGuard<ArraySimpleProtobuf>(input));
