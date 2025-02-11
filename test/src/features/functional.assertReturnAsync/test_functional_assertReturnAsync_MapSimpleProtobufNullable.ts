import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_MapSimpleProtobufNullable = _test_functional_assertReturnAsync(TypeGuardError)(
  "MapSimpleProtobufNullable"
)(MapSimpleProtobufNullable)(
  (p: (input: MapSimpleProtobufNullable) => Promise<MapSimpleProtobufNullable>) =>
    typia.functional.assertReturn(p),
)