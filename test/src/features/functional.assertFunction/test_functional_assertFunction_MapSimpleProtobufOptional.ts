import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_MapSimpleProtobufOptional = _test_functional_assertFunction(TypeGuardError)(
  "MapSimpleProtobufOptional"
)(MapSimpleProtobufOptional)(
  (p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) => typia.functional.assertFunction(p),
)