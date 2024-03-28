import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_assert_MapSimpleProtobufNullable = _test_assert(
  TypeGuardError,
)("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
  MapSimpleProtobufNullable,
)((input) => typia.assert<MapSimpleProtobufNullable>(input));
