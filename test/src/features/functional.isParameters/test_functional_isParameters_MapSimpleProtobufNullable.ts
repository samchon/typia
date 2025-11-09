import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_isParameters_MapSimpleProtobufNullable = (): void => _test_functional_isParameters(
  "MapSimpleProtobufNullable"
)(MapSimpleProtobufNullable)(
  (p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) => typia.functional.isParameters(p),
)