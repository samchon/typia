import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ArraySimpleProtobufOptional = _test_assert(CustomGuardError)(
    "ArraySimpleProtobufOptional",
)<ArraySimpleProtobufOptional>(
    ArraySimpleProtobufOptional
)((input) => typia.assert<ArraySimpleProtobufOptional>(input, (p) => new CustomGuardError(p)));
