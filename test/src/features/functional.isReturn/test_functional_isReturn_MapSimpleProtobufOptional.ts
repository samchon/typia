import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_isReturn_MapSimpleProtobufOptional = (): void => _test_functional_isReturn(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) => typia.functional.isReturn(p),
)