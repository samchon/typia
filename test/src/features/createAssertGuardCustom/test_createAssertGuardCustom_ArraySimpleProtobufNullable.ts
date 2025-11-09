import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_ArraySimpleProtobufNullable = (): void => _test_assertGuard(CustomGuardError)(
    "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(
    ArraySimpleProtobufNullable
)(typia.createAssertGuard<ArraySimpleProtobufNullable>((p) => new CustomGuardError(p)));
