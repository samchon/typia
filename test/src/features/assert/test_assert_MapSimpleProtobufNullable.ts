import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_assert_MapSimpleProtobufNullable = (): void => _test_assert(TypeGuardError)(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable
)((input) => typia.assert<MapSimpleProtobufNullable>(input));
