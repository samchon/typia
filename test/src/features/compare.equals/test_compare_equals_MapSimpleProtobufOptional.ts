import typia from "typia";

import { _test_compare_equals } from "../../internal/_test_compare_equals";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_compare_equals_MapSimpleProtobufOptional = _test_compare_equals(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional
)((a, b) => typia.compare.equals<MapSimpleProtobufOptional>(a, b));
