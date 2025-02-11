import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_createAssert_MapSimpleProtobuf = _test_assert(TypeGuardError)(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(
    MapSimpleProtobuf
)(typia.createAssert<MapSimpleProtobuf>());
