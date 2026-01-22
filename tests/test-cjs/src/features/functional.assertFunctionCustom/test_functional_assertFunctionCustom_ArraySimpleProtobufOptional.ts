import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_assertFunctionCustom_ArraySimpleProtobufOptional =
  (): void =>
    _test_functional_assertFunction(CustomGuardError)(
      "ArraySimpleProtobufOptional",
    )(ArraySimpleProtobufOptional)(
      (
        p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
