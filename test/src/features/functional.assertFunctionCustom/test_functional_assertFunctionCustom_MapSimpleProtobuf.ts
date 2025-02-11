import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_MapSimpleProtobuf = _test_functional_assertFunction(CustomGuardError)(
  "MapSimpleProtobuf"
)(MapSimpleProtobuf)(
  (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)