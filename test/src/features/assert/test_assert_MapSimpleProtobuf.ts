import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_assert_MapSimpleProtobuf = (): void =>
  _test_assert(TypeGuardError)("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf,
  )((input) => typia.assert<MapSimpleProtobuf>(input));
