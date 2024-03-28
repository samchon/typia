import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_assertGuardCustom_MapSimpleProtobufOptional =
  _test_assertGuard(CustomGuardError)(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)((input) =>
    typia.assertGuard<MapSimpleProtobufOptional>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
