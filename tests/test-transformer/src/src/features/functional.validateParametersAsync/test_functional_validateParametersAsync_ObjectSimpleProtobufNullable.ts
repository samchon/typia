import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_validateParametersAsync_ObjectSimpleProtobufNullable = (): Promise<void> => _test_functional_validateParametersAsync(
  "ObjectSimpleProtobufNullable"
)(ObjectSimpleProtobufNullable)(
  (p: (input: ObjectSimpleProtobufNullable) => Promise<ObjectSimpleProtobufNullable>) =>
    typia.functional.validateParameters(p),
)