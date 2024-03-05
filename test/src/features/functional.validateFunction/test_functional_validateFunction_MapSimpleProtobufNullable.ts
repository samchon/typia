import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_validateFunction_MapSimpleProtobufNullable =
  _test_functional_validateFunction("MapSimpleProtobufNullable")(
    MapSimpleProtobufNullable,
  )((p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) =>
    typia.functional.validateFunction(p),
  );
