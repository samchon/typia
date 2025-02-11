import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_isParametersAsync_ArraySimpleProtobufNullable = _test_functional_isParametersAsync(
  "ArraySimpleProtobufNullable"
)(ArraySimpleProtobufNullable)(
  (p: (input: ArraySimpleProtobufNullable) => Promise<ArraySimpleProtobufNullable>) =>
    typia.functional.isParameters(p),
)