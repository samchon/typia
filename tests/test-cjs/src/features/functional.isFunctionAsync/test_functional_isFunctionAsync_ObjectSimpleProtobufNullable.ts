import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_isFunctionAsync_ObjectSimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("ObjectSimpleProtobufNullable")(
      ObjectSimpleProtobufNullable,
    )(
      (
        p: (
          input: ObjectSimpleProtobufNullable,
        ) => Promise<ObjectSimpleProtobufNullable>,
      ) => typia.functional.isFunction(p),
    );
