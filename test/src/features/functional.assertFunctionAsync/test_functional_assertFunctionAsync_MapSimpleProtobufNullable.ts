import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_MapSimpleProtobufNullable = _test_functional_assertFunctionAsync(TypeGuardError)(
  "MapSimpleProtobufNullable"
)(MapSimpleProtobufNullable)(
  (p: (input: MapSimpleProtobufNullable) => Promise<MapSimpleProtobufNullable>) =>
    typia.functional.assertFunction(p),
)