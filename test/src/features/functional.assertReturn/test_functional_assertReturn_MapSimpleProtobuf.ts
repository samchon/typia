import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertReturn_MapSimpleProtobuf =
  _test_functional_assertReturn(TypeGuardError)("MapSimpleProtobuf")(
    MapSimpleProtobuf,
  )((p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) =>
    typia.functional.assertReturn(p),
  );
