import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_validateFunctionAsync_MapSimpleProtobuf = (): Promise<void> => _test_functional_validateFunctionAsync(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
    typia.functional.validateFunction(p),
)