import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_MapSimpleProtobufNullable = (): void => _test_assertGuard(CustomGuardError)(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable
)(typia.createAssertGuard<MapSimpleProtobufNullable>((p) => new CustomGuardError(p)));
