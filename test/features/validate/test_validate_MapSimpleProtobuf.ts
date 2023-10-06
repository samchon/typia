import typia from "../../../src";

import { _test_validate } from "../../internal/_test_validate";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_validate_MapSimpleProtobuf = _test_validate(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(
    MapSimpleProtobuf
)((input) => typia.validate<MapSimpleProtobuf>(input));
