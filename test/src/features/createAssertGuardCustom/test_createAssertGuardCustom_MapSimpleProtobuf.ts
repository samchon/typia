import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_createAssertGuardCustom_MapSimpleProtobuf = _test_assertGuard(
  CustomGuardError,
)("MapSimpleProtobuf")<MapSimpleProtobuf>(MapSimpleProtobuf)(
  typia.createAssertGuard<MapSimpleProtobuf>((p) => new CustomGuardError(p)),
);
