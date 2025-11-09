import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectSimpleProtobuf = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf
)((input) => typia.assertGuard<ObjectSimpleProtobuf>(input, (p) => new CustomGuardError(p)));
