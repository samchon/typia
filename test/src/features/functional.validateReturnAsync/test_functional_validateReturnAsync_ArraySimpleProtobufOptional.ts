import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_validateReturnAsync_ArraySimpleProtobufOptional = (): Promise<void> => _test_functional_validateReturnAsync(
  "ArraySimpleProtobufOptional"
)(ArraySimpleProtobufOptional)(
  (p: (input: ArraySimpleProtobufOptional) => Promise<ArraySimpleProtobufOptional>) =>
    typia.functional.validateReturn(p),
)