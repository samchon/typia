import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_createAssert_ObjectSimpleProtobuf = (): void => _test_assert(TypeGuardError)(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf
)(typia.createAssert<ObjectSimpleProtobuf>());
