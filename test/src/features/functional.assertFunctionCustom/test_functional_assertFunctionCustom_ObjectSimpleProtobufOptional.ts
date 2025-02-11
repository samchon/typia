import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ObjectSimpleProtobufOptional = _test_functional_assertFunction(CustomGuardError)(
  "ObjectSimpleProtobufOptional"
)(ObjectSimpleProtobufOptional)(
  (p: (input: ObjectSimpleProtobufOptional) => ObjectSimpleProtobufOptional) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)