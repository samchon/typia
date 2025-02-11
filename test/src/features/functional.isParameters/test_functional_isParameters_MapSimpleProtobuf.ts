import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_isParameters_MapSimpleProtobuf = _test_functional_isParameters(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) => typia.functional.isParameters(p),
)