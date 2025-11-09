import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_standardSchema_createValidate_MapSimpleProtobufOptional = (): void => _test_standardSchema_validate(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional
)(typia.createValidate<MapSimpleProtobufOptional>());
