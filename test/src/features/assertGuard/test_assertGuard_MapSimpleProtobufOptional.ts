import typia from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_assertGuard_MapSimpleProtobufOptional = _test_assertGuard(TypeGuardError)(
    "MapSimpleProtobufOptional",
)<MapSimpleProtobufOptional>(
    MapSimpleProtobufOptional
)((input) => typia.assertGuard<MapSimpleProtobufOptional>(input));
