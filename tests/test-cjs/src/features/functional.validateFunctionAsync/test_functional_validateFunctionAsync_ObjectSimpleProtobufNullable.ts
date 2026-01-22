import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_validateFunctionAsync_ObjectSimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectSimpleProtobufNullable")(
      ObjectSimpleProtobufNullable,
    )(
      (
        p: (
          input: ObjectSimpleProtobufNullable,
        ) => Promise<ObjectSimpleProtobufNullable>,
      ) => typia.functional.validateFunction(p),
    );
