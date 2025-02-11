import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectSimpleProtobuf = _test_assertGuard(TypeGuardError)(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf
)((input) => typia.assertGuard<ObjectSimpleProtobuf>(input));
