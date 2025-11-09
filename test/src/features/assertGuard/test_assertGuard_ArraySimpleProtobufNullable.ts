import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_assertGuard_ArraySimpleProtobufNullable = (): void => _test_assertGuard(TypeGuardError)(
    "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(
    ArraySimpleProtobufNullable
)((input) => typia.assertGuard<ArraySimpleProtobufNullable>(input));
