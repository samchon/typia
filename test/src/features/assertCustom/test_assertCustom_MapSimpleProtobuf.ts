import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_MapSimpleProtobuf = _test_assert(
  CustomGuardError,
)("MapSimpleProtobuf")<MapSimpleProtobuf>(MapSimpleProtobuf)((input) =>
  typia.assert<MapSimpleProtobuf>(input, (p) => new CustomGuardError(p)),
);
