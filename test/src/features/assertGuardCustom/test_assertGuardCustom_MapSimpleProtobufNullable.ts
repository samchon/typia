import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_assertGuardCustom_MapSimpleProtobufNullable = (): void =>
  _test_assertGuard(CustomGuardError)(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)((input) =>
    typia.assertGuard<MapSimpleProtobufNullable>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
