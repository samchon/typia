import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_assertFunctionAsyncCustom_MapSimpleProtobufOptional =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "MapSimpleProtobufOptional",
  )(MapSimpleProtobufOptional)(
    (
      p: (
        input: MapSimpleProtobufOptional,
      ) => Promise<MapSimpleProtobufOptional>,
    ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
