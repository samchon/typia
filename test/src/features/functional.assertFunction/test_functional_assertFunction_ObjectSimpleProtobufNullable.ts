import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_assertFunction_ObjectSimpleProtobufNullable =
  _test_functional_assertFunction(TypeGuardError)(
    "ObjectSimpleProtobufNullable",
  )(ObjectSimpleProtobufNullable)(
    (
      p: (input: ObjectSimpleProtobufNullable) => ObjectSimpleProtobufNullable,
    ) => typia.functional.assertFunction(p),
  );
