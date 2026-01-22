import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_assertFunctionAsyncCustom_ObjectSimpleProtobuf =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ObjectSimpleProtobuf",
    )(ObjectSimpleProtobuf)(
      (p: (input: ObjectSimpleProtobuf) => Promise<ObjectSimpleProtobuf>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
