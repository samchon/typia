import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_standardSchema_createValidate_MapSimpleProtobuf = (): void => _test_standardSchema_validate(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(
    MapSimpleProtobuf
)(typia.createValidate<MapSimpleProtobuf>());
