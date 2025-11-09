import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createAssert_ObjectSimpleProtobuf = (): void =>
  _test_assert(TypeGuardError)("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )(typia.createAssert<ObjectSimpleProtobuf>());
