import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectSimpleProtobufNullable = (): void => _test_assertGuard(TypeGuardError)(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(
    ObjectSimpleProtobufNullable
)((input) => typia.assertGuard<ObjectSimpleProtobufNullable>(input));
