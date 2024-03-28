import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_assertCustom_MapSimpleProtobufOptional = _test_assert(
  CustomGuardError,
)("MapSimpleProtobufOptional")<MapSimpleProtobufOptional>(
  MapSimpleProtobufOptional,
)((input) =>
  typia.assert<MapSimpleProtobufOptional>(
    input,
    (p) => new CustomGuardError(p),
  ),
);
