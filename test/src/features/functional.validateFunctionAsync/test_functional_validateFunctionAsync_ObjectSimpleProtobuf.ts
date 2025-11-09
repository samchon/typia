import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_validateFunctionAsync_ObjectSimpleProtobuf =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ObjectSimpleProtobuf")(
      ObjectSimpleProtobuf,
    )((p: (input: ObjectSimpleProtobuf) => Promise<ObjectSimpleProtobuf>) =>
      typia.functional.validateFunction(p),
    );
