import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_validateFunction_ObjectSimpleProtobufNullable = (): void => _test_functional_validateFunction(
  "ObjectSimpleProtobufNullable"
)(ObjectSimpleProtobufNullable)(
  (p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable) => typia.functional.validateFunction(p),
)