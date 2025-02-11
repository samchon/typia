import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_assertParametersAsync_MapSimpleProtobufOptional =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "MapSimpleProtobufOptional",
  )(MapSimpleProtobufOptional)(
    (
      p: (
        input: MapSimpleProtobufOptional,
      ) => Promise<MapSimpleProtobufOptional>,
    ) => typia.functional.assertParameters(p),
  );
