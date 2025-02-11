import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_createIs_MapSimpleProtobuf = _test_is(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(
    MapSimpleProtobuf
)(typia.createIs<MapSimpleProtobuf>());
