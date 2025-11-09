import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_MapSimpleProtobufOptional = (): void => _test_assertGuard(CustomGuardError)(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional
)(typia.createAssertGuard<MapSimpleProtobufOptional>((p) => new CustomGuardError(p)));
