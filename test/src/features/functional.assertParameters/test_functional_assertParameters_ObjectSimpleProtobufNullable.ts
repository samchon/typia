import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ObjectSimpleProtobufNullable = _test_functional_assertParameters(TypeGuardError)(
  "ObjectSimpleProtobufNullable"
)(ObjectSimpleProtobufNullable)(
  (p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable) => typia.functional.assertParameters(p),
)