import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_isFunctionAsync_MapSimpleProtobuf = (): Promise<void> => _test_functional_isFunctionAsync(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
    typia.functional.isFunction(p),
)