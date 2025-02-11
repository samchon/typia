import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_createValidate_MapSimpleProtobufNullable = _test_validate(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable
)(typia.createValidate<MapSimpleProtobufNullable>());
