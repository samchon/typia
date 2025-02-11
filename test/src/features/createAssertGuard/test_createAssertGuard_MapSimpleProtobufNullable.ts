import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_createAssertGuard_MapSimpleProtobufNullable = _test_assertGuard(TypeGuardError)(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable
)(typia.createAssertGuard<MapSimpleProtobufNullable>());
