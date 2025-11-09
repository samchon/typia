import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_MapSimpleProtobufOptional = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => Promise<MapSimpleProtobufOptional>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)