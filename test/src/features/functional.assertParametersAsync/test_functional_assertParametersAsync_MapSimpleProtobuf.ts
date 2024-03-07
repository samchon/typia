import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_MapSimpleProtobuf =
  _test_functional_assertParametersAsync(TypeGuardError)("MapSimpleProtobuf")(
    MapSimpleProtobuf,
  )((p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
    typia.functional.assertParameters(p),
  );
