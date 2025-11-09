import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_createIs_MapSimpleProtobufOptional = (): void => _test_is(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional
)(typia.createIs<MapSimpleProtobufOptional>());
