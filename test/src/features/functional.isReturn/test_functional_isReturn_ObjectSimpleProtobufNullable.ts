import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_isReturn_ObjectSimpleProtobufNullable =
  _test_functional_isReturn("ObjectSimpleProtobufNullable")(
    ObjectSimpleProtobufNullable,
  )(
    (
      p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable,
    ) => typia.functional.isReturn(p),
  );
