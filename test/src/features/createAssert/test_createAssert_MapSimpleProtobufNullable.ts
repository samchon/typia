import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_createAssert_MapSimpleProtobufNullable = (): void =>
  _test_assert(TypeGuardError)(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)(
    typia.createAssert<MapSimpleProtobufNullable>(),
  );
