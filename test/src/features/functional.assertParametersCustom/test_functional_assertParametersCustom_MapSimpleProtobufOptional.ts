import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_assertParametersCustom_MapSimpleProtobufOptional =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "MapSimpleProtobufOptional",
    )(MapSimpleProtobufOptional)(
      (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
