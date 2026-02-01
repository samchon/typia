import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_isReturnAsync_MapSimpleProtobufOptional = (): Promise<void> => _test_functional_isReturnAsync(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => Promise<MapSimpleProtobufOptional>) =>
    typia.functional.isReturn(p),
)