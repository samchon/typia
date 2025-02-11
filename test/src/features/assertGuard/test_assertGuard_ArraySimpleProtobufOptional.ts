import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_assertGuard_ArraySimpleProtobufOptional = _test_assertGuard(TypeGuardError)(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional
)((input) => typia.assertGuard<ArraySimpleProtobufOptional>(input));
