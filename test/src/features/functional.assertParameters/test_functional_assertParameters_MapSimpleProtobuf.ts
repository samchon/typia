import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_MapSimpleProtobuf = _test_functional_assertParameters(TypeGuardError)(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) => typia.functional.assertParameters(p),
)