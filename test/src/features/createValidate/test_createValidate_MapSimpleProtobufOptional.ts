import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_createValidate_MapSimpleProtobufOptional = _test_validate(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional
)(typia.createValidate<MapSimpleProtobufOptional>());
