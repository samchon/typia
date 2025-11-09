import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArraySimpleProtobufOptional = (): void => _test_assertGuard(CustomGuardError)(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional
)(typia.createAssertGuard<ArraySimpleProtobufOptional>((p) => new CustomGuardError(p)));
