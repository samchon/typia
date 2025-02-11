import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_assertParameters_MapSimpleProtobuf =
  _test_functional_assertParameters(TypeGuardError)("MapSimpleProtobuf")(
    MapSimpleProtobuf,
  )((p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) =>
    typia.functional.assertParameters(p),
  );
