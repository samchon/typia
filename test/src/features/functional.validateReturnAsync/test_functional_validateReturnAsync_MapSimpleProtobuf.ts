import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_validateReturnAsync_MapSimpleProtobuf =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("MapSimpleProtobuf")(
      MapSimpleProtobuf,
    )((p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
      typia.functional.validateReturn(p),
    );
