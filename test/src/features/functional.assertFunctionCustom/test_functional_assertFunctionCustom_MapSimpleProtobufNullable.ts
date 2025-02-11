import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_assertFunctionCustom_MapSimpleProtobufNullable =
  _test_functional_assertFunction(CustomGuardError)(
    "MapSimpleProtobufNullable",
  )(MapSimpleProtobufNullable)(
    (p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
