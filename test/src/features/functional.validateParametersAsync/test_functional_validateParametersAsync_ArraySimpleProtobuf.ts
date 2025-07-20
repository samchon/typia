import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_validateParametersAsync_ArraySimpleProtobuf =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ArraySimpleProtobuf")(
      ArraySimpleProtobuf,
    )((p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
      typia.functional.validateParameters(p),
    );
