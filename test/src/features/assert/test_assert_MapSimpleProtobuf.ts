import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_assert_MapSimpleProtobuf = _test_assert(TypeGuardError)(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(
    MapSimpleProtobuf
)((input) => typia.assert<MapSimpleProtobuf>(input));
