import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_assertParametersAsync_ObjectSimpleProtobuf =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ObjectSimpleProtobuf",
    )(ObjectSimpleProtobuf)(
      (p: (input: ObjectSimpleProtobuf) => Promise<ObjectSimpleProtobuf>) =>
        typia.functional.assertParameters(p),
    );
