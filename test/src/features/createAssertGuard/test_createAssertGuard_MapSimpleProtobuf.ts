import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_createAssertGuard_MapSimpleProtobuf = _test_assertGuard(
  TypeGuardError,
)("MapSimpleProtobuf")<MapSimpleProtobuf>(MapSimpleProtobuf)(
  typia.createAssertGuard<MapSimpleProtobuf>(),
);
