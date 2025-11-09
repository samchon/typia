import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_assertReturn_MapSimpleProtobuf = (): void =>
  _test_functional_assertReturn(TypeGuardError)("MapSimpleProtobuf")(
    MapSimpleProtobuf,
  )((p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) =>
    typia.functional.assertReturn(p),
  );
