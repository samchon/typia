import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_isReturnAsync_MapSimpleProtobufNullable = _test_functional_isReturnAsync(
  "MapSimpleProtobufNullable"
)(MapSimpleProtobufNullable)(
  (p: (input: MapSimpleProtobufNullable) => Promise<MapSimpleProtobufNullable>) =>
    typia.functional.isReturn(p),
)