import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_assertReturnAsyncCustom_ArraySimpleProtobufOptional =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)(
      "ArraySimpleProtobufOptional",
    )(ArraySimpleProtobufOptional)(
      (
        p: (
          input: ArraySimpleProtobufOptional,
        ) => Promise<ArraySimpleProtobufOptional>,
      ) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
