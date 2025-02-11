import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_MapSimpleProtobuf = _test_assert(CustomGuardError)(
    "MapSimpleProtobuf",
)<MapSimpleProtobuf>(
    MapSimpleProtobuf
)(typia.createAssert<MapSimpleProtobuf>((p) => new CustomGuardError(p)));
