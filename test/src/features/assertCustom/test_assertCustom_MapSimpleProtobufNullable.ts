import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_MapSimpleProtobufNullable = _test_assert(
  CustomGuardError,
)("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
  MapSimpleProtobufNullable,
)((input) =>
  typia.assert<MapSimpleProtobufNullable>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
