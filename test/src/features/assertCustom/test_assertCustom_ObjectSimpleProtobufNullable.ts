import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectSimpleProtobufNullable = (): void => _test_assert(CustomGuardError)(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(
    ObjectSimpleProtobufNullable
)((input) => typia.assert<ObjectSimpleProtobufNullable>(input, (p) => new CustomGuardError(p)));
