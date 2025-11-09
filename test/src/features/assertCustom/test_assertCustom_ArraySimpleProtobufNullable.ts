import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArraySimpleProtobufNullable = (): void => _test_assert(CustomGuardError)(
    "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(
    ArraySimpleProtobufNullable
)((input) => typia.assert<ArraySimpleProtobufNullable>(input, (p) => new CustomGuardError(p)));
