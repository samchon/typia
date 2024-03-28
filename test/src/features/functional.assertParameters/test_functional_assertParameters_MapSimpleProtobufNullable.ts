import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_assertParameters_MapSimpleProtobufNullable =
  _test_functional_assertParameters(TypeGuardError)(
    "MapSimpleProtobufNullable",
  )(MapSimpleProtobufNullable)(
    (p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) =>
      typia.functional.assertParameters(p),
  );
