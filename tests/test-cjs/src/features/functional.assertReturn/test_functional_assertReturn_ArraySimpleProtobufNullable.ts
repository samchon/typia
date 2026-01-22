import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_assertReturn_ArraySimpleProtobufNullable =
  (): void =>
    _test_functional_assertReturn(TypeGuardError)(
      "ArraySimpleProtobufNullable",
    )(ArraySimpleProtobufNullable)(
      (
        p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable,
      ) => typia.functional.assertReturn(p),
    );
