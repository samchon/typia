import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_assertParameters_ArraySimpleProtobufNullable =
  (): void =>
    _test_functional_assertParameters(TypeGuardError)(
      "ArraySimpleProtobufNullable",
    )(ArraySimpleProtobufNullable)(
      (
        p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable,
      ) => typia.functional.assertParameters(p),
    );
