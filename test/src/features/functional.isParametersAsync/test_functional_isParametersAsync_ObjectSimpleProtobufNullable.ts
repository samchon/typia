import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_isParametersAsync_ObjectSimpleProtobufNullable = _test_functional_isParametersAsync(
  "ObjectSimpleProtobufNullable"
)(ObjectSimpleProtobufNullable)(
  (p: (input: ObjectSimpleProtobufNullable) => Promise<ObjectSimpleProtobufNullable>) =>
    typia.functional.isParameters(p),
)