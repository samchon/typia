import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_isReturnAsync_ObjectSimpleProtobufNullable =
  _test_functional_isReturnAsync("ObjectSimpleProtobufNullable")(
    ObjectSimpleProtobufNullable,
  )(
    (
      p: (
        input: ObjectSimpleProtobufNullable,
      ) => Promise<ObjectSimpleProtobufNullable>,
    ) => typia.functional.isReturn(p),
  );
