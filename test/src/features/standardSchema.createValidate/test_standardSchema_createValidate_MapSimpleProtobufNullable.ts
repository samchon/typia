import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_standardSchema_createValidate_MapSimpleProtobufNullable = _test_standardSchema_validate(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable
)(typia.createValidate<MapSimpleProtobufNullable>());
