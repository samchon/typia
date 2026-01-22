import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimpleProtobufNullable } from "../../structures/ObjectSimpleProtobufNullable";

export const test_functional_assertFunctionAsyncCustom_ObjectSimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ObjectSimpleProtobufNullable",
    )(ObjectSimpleProtobufNullable)(
      (
        p: (
          input: ObjectSimpleProtobufNullable,
        ) => Promise<ObjectSimpleProtobufNullable>,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
