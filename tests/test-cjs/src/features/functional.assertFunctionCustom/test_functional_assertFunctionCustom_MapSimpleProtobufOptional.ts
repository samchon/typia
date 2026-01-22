import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_assertFunctionCustom_MapSimpleProtobufOptional =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)(
      "MapSimpleProtobufOptional",
    )(MapSimpleProtobufOptional)(
      (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
