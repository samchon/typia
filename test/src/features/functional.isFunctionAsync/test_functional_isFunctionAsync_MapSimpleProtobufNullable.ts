import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_isFunctionAsync_MapSimpleProtobufNullable = (): Promise<void> => _test_functional_isFunctionAsync(
  "MapSimpleProtobufNullable"
)(MapSimpleProtobufNullable)(
  (p: (input: MapSimpleProtobufNullable) => Promise<MapSimpleProtobufNullable>) =>
    typia.functional.isFunction(p),
)