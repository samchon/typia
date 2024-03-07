import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ObjectSimpleProtobufNullable =
  _test_functional_assertFunctionAsync(TypeGuardError)(
    "ObjectSimpleProtobufNullable",
  )(ObjectSimpleProtobufNullable)(
    (
      p: (
        input: ObjectSimpleProtobufNullable,
      ) => Promise<ObjectSimpleProtobufNullable>,
    ) => typia.functional.assertFunction(p),
  );
