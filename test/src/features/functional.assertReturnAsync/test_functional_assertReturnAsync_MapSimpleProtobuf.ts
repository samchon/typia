import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_assertReturnAsync_MapSimpleProtobuf =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("MapSimpleProtobuf")(
      MapSimpleProtobuf,
    )((p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
      typia.functional.assertReturn(p),
    );
