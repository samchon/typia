import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_assertReturnCustom_MapSimpleProtobufOptional =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)(
      "MapSimpleProtobufOptional",
    )(MapSimpleProtobufOptional)(
      (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
        typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
