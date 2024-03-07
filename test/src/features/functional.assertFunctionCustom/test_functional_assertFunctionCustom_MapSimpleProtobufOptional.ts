import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_MapSimpleProtobufOptional =
  _test_functional_assertFunction(CustomGuardError)(
    "MapSimpleProtobufOptional",
  )(MapSimpleProtobufOptional)(
    (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
