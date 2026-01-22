import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_assertGuard_MapSimpleProtobufOptional = (): void =>
  _test_assertGuard(TypeGuardError)(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)((input) =>
    typia.assertGuard<MapSimpleProtobufOptional>(input),
  );
