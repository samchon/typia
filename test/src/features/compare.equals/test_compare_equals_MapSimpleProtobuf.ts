import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_compare_equals_MapSimpleProtobuf = _test_compare_equals(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(
    MapSimpleProtobuf
)((a, b) => typia.compare.equals<MapSimpleProtobuf>(a, b));
