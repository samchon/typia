import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_createAssertGuard_MapSimpleProtobufNullable =
  _test_assertGuard(TypeGuardError)(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)(
    typia.createAssertGuard<MapSimpleProtobufNullable>(),
  );
