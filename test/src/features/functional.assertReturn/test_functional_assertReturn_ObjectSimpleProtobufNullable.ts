import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_assertReturn_ObjectSimpleProtobufNullable =
  _test_functional_assertReturn(TypeGuardError)("ObjectSimpleProtobufNullable")(
    ObjectSimpleProtobufNullable,
  )(
    (
      p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable,
    ) => typia.functional.assertReturn(p),
  );
