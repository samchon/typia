import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_ObjectSequenceProtobuf = (): void => _test_assertGuard(CustomGuardError)(
    "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf
)((input) => typia.assertGuard<ObjectSequenceProtobuf>(input, (p) => new CustomGuardError(p)));
