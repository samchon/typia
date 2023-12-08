import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_createAssertGuard_ObjectSimpleProtobuf = _test_assertGuard(
  "ObjectSimpleProtobuf",
)<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)(
  typia.createAssertGuard<ObjectSimpleProtobuf>(),
);
