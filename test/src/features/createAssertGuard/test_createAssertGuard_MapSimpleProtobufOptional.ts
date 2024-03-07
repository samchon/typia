import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_MapSimpleProtobufOptional =
  _test_assertGuard(TypeGuardError)(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)(
    typia.createAssertGuard<MapSimpleProtobufOptional>(),
  );
