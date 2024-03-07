import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_assert_ObjectSimpleProtobuf = _test_assert(TypeGuardError)(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)((input) =>
  typia.assert<ObjectSimpleProtobuf>(input),
);
