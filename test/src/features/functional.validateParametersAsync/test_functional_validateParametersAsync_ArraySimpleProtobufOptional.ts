import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_validateParametersAsync_ArraySimpleProtobufOptional = (): Promise<void> => _test_functional_validateParametersAsync(
  "ArraySimpleProtobufOptional"
)(ArraySimpleProtobufOptional)(
  (p: (input: ArraySimpleProtobufOptional) => Promise<ArraySimpleProtobufOptional>) =>
    typia.functional.validateParameters(p),
)