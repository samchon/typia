import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_isParameters_ObjectSimpleProtobufNullable = _test_functional_isParameters(
  "ObjectSimpleProtobufNullable"
)(ObjectSimpleProtobufNullable)(
  (p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable) => typia.functional.isParameters(p),
)