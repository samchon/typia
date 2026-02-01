import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_validateParameters_MapSimpleProtobuf = (): void => _test_functional_validateParameters(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) => typia.functional.validateParameters(p),
)