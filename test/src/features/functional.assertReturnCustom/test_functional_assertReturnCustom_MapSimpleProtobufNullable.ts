import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_MapSimpleProtobufNullable = _test_functional_assertReturn(CustomGuardError)(
  "MapSimpleProtobufNullable"
)(MapSimpleProtobufNullable)(
  (p: (input: MapSimpleProtobufNullable) => MapSimpleProtobufNullable) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)