import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ArraySimpleProtobufOptional =
  _test_functional_assertReturn(CustomGuardError)(
    "ArraySimpleProtobufOptional",
  )(ArraySimpleProtobufOptional)(
    (p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
