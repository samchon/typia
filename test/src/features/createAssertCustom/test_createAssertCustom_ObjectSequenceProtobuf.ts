import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSequenceProtobuf } from "../../structures/ObjectSequenceProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectSequenceProtobuf = (): void => _test_assert(CustomGuardError)(
    "ObjectSequenceProtobuf",
)<ObjectSequenceProtobuf>(
    ObjectSequenceProtobuf
)(typia.createAssert<ObjectSequenceProtobuf>((p) => new CustomGuardError(p)));
