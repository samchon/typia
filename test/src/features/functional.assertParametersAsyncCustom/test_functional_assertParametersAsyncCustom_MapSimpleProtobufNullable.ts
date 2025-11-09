import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_assertParametersAsyncCustom_MapSimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "MapSimpleProtobufNullable",
    )(MapSimpleProtobufNullable)(
      (
        p: (
          input: MapSimpleProtobufNullable,
        ) => Promise<MapSimpleProtobufNullable>,
      ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
