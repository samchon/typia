import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_assert_ObjectSimpleProtobufOptional = _test_assert(TypeGuardError)(
    "ObjectSimpleProtobufOptional",
)<ObjectSimpleProtobufOptional>(
    ObjectSimpleProtobufOptional
)((input) => typia.assert<ObjectSimpleProtobufOptional>(input));
