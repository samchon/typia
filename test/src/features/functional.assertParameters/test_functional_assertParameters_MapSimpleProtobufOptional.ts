import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_MapSimpleProtobufOptional = _test_functional_assertParameters(TypeGuardError)(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) => typia.functional.assertParameters(p),
)