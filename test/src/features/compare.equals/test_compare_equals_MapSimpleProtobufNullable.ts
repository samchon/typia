import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_compare_equals_MapSimpleProtobufNullable = _test_compare_equals(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable
)((a, b) => typia.compare.equals<MapSimpleProtobufNullable>(a, b));
