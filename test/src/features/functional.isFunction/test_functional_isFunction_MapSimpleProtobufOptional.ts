import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_isFunction_MapSimpleProtobufOptional = _test_functional_isFunction(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) => typia.functional.isFunction(p),
)