import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_isParametersAsync_MapSimpleProtobufOptional = _test_functional_isParametersAsync(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => Promise<MapSimpleProtobufOptional>) =>
    typia.functional.isParameters(p),
)