import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_MapSimpleProtobufOptional = _test_assert(CustomGuardError)(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional
)(typia.createAssert<MapSimpleProtobufOptional>((p) => new CustomGuardError(p)));
