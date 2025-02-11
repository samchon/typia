import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertGuardCustom_MapSimpleProtobuf = _test_assertGuard(CustomGuardError)(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(
    MapSimpleProtobuf
)(typia.createAssertGuard<MapSimpleProtobuf>((p) => new CustomGuardError(p)));
