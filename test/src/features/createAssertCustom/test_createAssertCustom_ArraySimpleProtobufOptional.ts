import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ArraySimpleProtobufOptional = (): void => _test_assert(CustomGuardError)(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional
)(typia.createAssert<ArraySimpleProtobufOptional>((p) => new CustomGuardError(p)));
