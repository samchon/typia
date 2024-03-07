import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_MapSimpleProtobufNullable =
  _test_functional_assertFunction(TypeGuardError)("MapSimpleProtobufNullable")(
    MapSimpleProtobufNullable,
  )((p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) =>
    typia.functional.assertFunction(p),
  );
