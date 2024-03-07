import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_MapSimpleProtobuf =
  _test_functional_assertReturn(CustomGuardError)("MapSimpleProtobuf")(
    MapSimpleProtobuf,
  )((p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
