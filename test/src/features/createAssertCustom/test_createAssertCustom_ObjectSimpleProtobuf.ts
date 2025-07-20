import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createAssertCustom_ObjectSimpleProtobuf = (): void =>
  _test_assert(CustomGuardError)("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )(typia.createAssert<ObjectSimpleProtobuf>((p) => new CustomGuardError(p)));
