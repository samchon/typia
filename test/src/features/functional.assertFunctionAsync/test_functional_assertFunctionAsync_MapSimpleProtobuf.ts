import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_MapSimpleProtobuf =
  _test_functional_assertFunctionAsync(TypeGuardError)("MapSimpleProtobuf")(
    MapSimpleProtobuf,
  )((p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
    typia.functional.assertFunction(p),
  );
