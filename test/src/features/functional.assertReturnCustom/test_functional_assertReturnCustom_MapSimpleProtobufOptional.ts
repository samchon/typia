import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_MapSimpleProtobufOptional =
  _test_functional_assertReturn(CustomGuardError)("MapSimpleProtobufOptional")(
    MapSimpleProtobufOptional,
  )((p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
