import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { TypeGuardError } from "typia";

export const test_assertGuard_ObjectSequenceProtobuf = (): void => _test_assertGuard(TypeGuardError)(
    "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf
)((input) => typia.assertGuard<ObjectSequenceProtobuf>(input));
