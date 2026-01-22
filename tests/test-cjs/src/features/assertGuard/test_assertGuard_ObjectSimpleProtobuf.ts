import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_assertGuard_ObjectSimpleProtobuf = (): void =>
  _test_assertGuard(TypeGuardError)(
    "ObjectSimpleProtobuf",
  )<ObjectSimpleProtobuf>(ObjectSimpleProtobuf)((input) =>
    typia.assertGuard<ObjectSimpleProtobuf>(input),
  );
