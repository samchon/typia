import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectSimpleProtobufOptional } from "../../structures/ObjectSimpleProtobufOptional";

export const test_functional_validateFunctionAsync_ObjectSimpleProtobufOptional = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ObjectSimpleProtobufOptional"
)(ObjectSimpleProtobufOptional)(
  (p: (input: ObjectSimpleProtobufOptional) => Promise<ObjectSimpleProtobufOptional>) =>
    typia.functional.validateFunction(p),
)