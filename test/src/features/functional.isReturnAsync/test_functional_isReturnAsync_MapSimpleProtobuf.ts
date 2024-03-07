import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_isReturnAsync_MapSimpleProtobuf =
  _test_functional_isReturnAsync("MapSimpleProtobuf")(MapSimpleProtobuf)(
    (p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
      typia.functional.isReturn(p),
  );
