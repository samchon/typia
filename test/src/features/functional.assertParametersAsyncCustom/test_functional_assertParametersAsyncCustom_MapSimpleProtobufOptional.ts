import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_MapSimpleProtobufOptional = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => Promise<MapSimpleProtobufOptional>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)