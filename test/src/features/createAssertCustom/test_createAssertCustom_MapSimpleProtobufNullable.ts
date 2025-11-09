import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_MapSimpleProtobufNullable = (): void => _test_assert(CustomGuardError)(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable
)(typia.createAssert<MapSimpleProtobufNullable>((p) => new CustomGuardError(p)));
