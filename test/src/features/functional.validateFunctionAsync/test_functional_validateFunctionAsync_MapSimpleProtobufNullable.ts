import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_validateFunctionAsync_MapSimpleProtobufNullable = (): Promise<void> => _test_functional_validateFunctionAsync(
  "MapSimpleProtobufNullable"
)(MapSimpleProtobufNullable)(
  (p: (input: MapSimpleProtobufNullable) => Promise<MapSimpleProtobufNullable>) =>
    typia.functional.validateFunction(p),
)