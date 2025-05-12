import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_assert_ArraySimpleProtobuf = _test_assert(TypeGuardError)(
  "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)((input) =>
  typia.assert<ArraySimpleProtobuf>(input),
);
