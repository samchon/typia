import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_createAssert_MapSimpleProtobufOptional = (): void =>
  _test_assert(TypeGuardError)(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)(
    typia.createAssert<MapSimpleProtobufOptional>(),
  );
