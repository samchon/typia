import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_MapSimpleProtobufOptional = _test_functional_assertParameters(CustomGuardError)(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)