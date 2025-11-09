import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectSimpleProtobufNullable = (): void => _test_assert(TypeGuardError)(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(
    ObjectSimpleProtobufNullable
)(typia.createAssert<ObjectSimpleProtobufNullable>());
