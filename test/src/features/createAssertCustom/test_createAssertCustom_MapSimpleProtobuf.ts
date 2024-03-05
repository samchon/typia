import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_createAssertCustom_MapSimpleProtobuf = _test_assert(
  CustomGuardError,
)("MapSimpleProtobuf")<MapSimpleProtobuf>(MapSimpleProtobuf)(
  typia.createAssert<MapSimpleProtobuf>((p) => new CustomGuardError(p)),
);
