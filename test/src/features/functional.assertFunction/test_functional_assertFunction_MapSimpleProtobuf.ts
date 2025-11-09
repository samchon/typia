import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_MapSimpleProtobuf = (): void => _test_functional_assertFunction(TypeGuardError)(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) => typia.functional.assertFunction(p),
)