import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_assert_MapSimpleProtobufOptional = _test_assert(
  TypeGuardError,
)("MapSimpleProtobufOptional")<MapSimpleProtobufOptional>(
  MapSimpleProtobufOptional,
)((input) => typia.assert<MapSimpleProtobufOptional>(input));
