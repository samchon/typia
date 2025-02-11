import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectSimpleProtobufOptional = _test_functional_assertParameters(TypeGuardError)(
  "ObjectSimpleProtobufOptional"
)(ObjectSimpleProtobufOptional)(
  (p: (input: ObjectSimpleProtobufOptional) => ObjectSimpleProtobufOptional) => typia.functional.assertParameters(p),
)