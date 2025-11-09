import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_assertReturn_ArraySimpleProtobufOptional =
  (): void =>
    _test_functional_assertReturn(TypeGuardError)(
      "ArraySimpleProtobufOptional",
    )(ArraySimpleProtobufOptional)(
      (
        p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional,
      ) => typia.functional.assertReturn(p),
    );
