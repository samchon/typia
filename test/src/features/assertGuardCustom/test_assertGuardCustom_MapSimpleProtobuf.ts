import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_MapSimpleProtobuf = _test_assertGuard(
  CustomGuardError,
)("MapSimpleProtobuf")<MapSimpleProtobuf>(MapSimpleProtobuf)((input) =>
  typia.assertGuard<MapSimpleProtobuf>(input, (p) => new CustomGuardError(p)),
);
