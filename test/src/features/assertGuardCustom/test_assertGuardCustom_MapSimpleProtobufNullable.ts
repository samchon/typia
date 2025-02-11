import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertGuardCustom_MapSimpleProtobufNullable = _test_assertGuard(CustomGuardError)(
    "MapSimpleProtobufNullable",
)<MapSimpleProtobufNullable>(
    MapSimpleProtobufNullable
)((input) => typia.assertGuard<MapSimpleProtobufNullable>(input, (p) => new CustomGuardError(p)));
