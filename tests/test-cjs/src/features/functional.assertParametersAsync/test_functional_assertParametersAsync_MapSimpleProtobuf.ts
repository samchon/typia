import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_assertParametersAsync_MapSimpleProtobuf =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("MapSimpleProtobuf")(
      MapSimpleProtobuf,
    )((p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
      typia.functional.assertParameters(p),
    );
