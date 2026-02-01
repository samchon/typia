import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_validateReturn_MapSimpleProtobuf = (): void => _test_functional_validateReturn(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) => typia.functional.validateReturn(p),
)