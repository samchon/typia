import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_isReturn_MapSimpleProtobufNullable = _test_functional_isReturn(
  "MapSimpleProtobufNullable"
)(MapSimpleProtobufNullable)(
  (p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) => typia.functional.isReturn(p),
)