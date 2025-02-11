import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_ObjectSimpleProtobufOptional = _test_assertGuard(TypeGuardError)(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional
)(typia.createAssertGuard<ObjectSimpleProtobufOptional>());
