import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_createAssertGuardCustom_MapSimpleProtobufNullable =
  _test_assertGuard(CustomGuardError)(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)(
    typia.createAssertGuard<MapSimpleProtobufNullable>(
      (p) => new CustomGuardError(p),
    ),
  );
