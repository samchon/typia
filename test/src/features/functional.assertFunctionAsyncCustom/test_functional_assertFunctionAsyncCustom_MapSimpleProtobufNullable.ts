import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_MapSimpleProtobufNullable =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "MapSimpleProtobufNullable",
  )(MapSimpleProtobufNullable)(
    (
      p: (
        input: MapSimpleProtobufNullable,
      ) => Promise<MapSimpleProtobufNullable>,
    ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
