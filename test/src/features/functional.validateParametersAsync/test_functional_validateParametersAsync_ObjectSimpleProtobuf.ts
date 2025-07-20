import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_functional_validateParametersAsync_ObjectSimpleProtobuf =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ObjectSimpleProtobuf")(
      ObjectSimpleProtobuf,
    )((p: (input: ObjectSimpleProtobuf) => Promise<ObjectSimpleProtobuf>) =>
      typia.functional.validateParameters(p),
    );
