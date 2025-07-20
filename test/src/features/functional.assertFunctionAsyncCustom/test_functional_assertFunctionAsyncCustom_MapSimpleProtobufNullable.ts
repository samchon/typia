import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_assertFunctionAsyncCustom_MapSimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "MapSimpleProtobufNullable",
    )(MapSimpleProtobufNullable)(
      (
        p: (
          input: MapSimpleProtobufNullable,
        ) => Promise<MapSimpleProtobufNullable>,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
