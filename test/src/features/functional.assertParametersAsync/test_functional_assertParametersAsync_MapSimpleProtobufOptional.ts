import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_MapSimpleProtobufOptional = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => Promise<MapSimpleProtobufOptional>) =>
    typia.functional.assertParameters(p),
)