import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectSimpleProtobufNullable = _test_assertGuard(CustomGuardError)(
    "ObjectSimpleProtobufNullable",
)<ObjectSimpleProtobufNullable>(
    ObjectSimpleProtobufNullable
)((input) => typia.assertGuard<ObjectSimpleProtobufNullable>(input, (p) => new CustomGuardError(p)));
