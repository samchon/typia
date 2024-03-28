import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_assertParametersCustom_MapSimpleProtobufNullable =
  _test_functional_assertParameters(CustomGuardError)(
    "MapSimpleProtobufNullable",
  )(MapSimpleProtobufNullable)(
    (p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
