import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_assertParametersAsyncCustom_MapSimpleProtobuf =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "MapSimpleProtobuf",
    )(MapSimpleProtobuf)(
      (p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
