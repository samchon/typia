import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArraySimpleProtobufOptional =
  _test_functional_assertReturnAsync(TypeGuardError)(
    "ArraySimpleProtobufOptional",
  )(ArraySimpleProtobufOptional)(
    (
      p: (
        input: ArraySimpleProtobufOptional,
      ) => Promise<ArraySimpleProtobufOptional>,
    ) => typia.functional.assertReturn(p),
  );
