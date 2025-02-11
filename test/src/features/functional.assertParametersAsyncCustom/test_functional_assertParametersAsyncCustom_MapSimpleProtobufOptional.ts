import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_assertParametersAsyncCustom_MapSimpleProtobufOptional =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "MapSimpleProtobufOptional",
  )(MapSimpleProtobufOptional)(
    (
      p: (
        input: MapSimpleProtobufOptional,
      ) => Promise<MapSimpleProtobufOptional>,
    ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
