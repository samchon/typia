import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_assertReturn_MapSimpleProtobufNullable =
  _test_functional_assertReturn(TypeGuardError)("MapSimpleProtobufNullable")(
    MapSimpleProtobufNullable,
  )((p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) =>
    typia.functional.assertReturn(p),
  );
