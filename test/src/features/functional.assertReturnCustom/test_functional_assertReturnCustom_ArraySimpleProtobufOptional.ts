import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_assertReturnCustom_ArraySimpleProtobufOptional =
  (): void =>
    _test_functional_assertReturn(CustomGuardError)(
      "ArraySimpleProtobufOptional",
    )(ArraySimpleProtobufOptional)(
      (
        p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional,
      ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
