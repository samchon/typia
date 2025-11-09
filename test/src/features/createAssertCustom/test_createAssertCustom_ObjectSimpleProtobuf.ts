import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectSimpleProtobuf = (): void => _test_assert(CustomGuardError)(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf
)(typia.createAssert<ObjectSimpleProtobuf>((p) => new CustomGuardError(p)));
