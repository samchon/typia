import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_isParametersAsync_MapSimpleProtobuf =
  (): Promise<void> =>
    _test_functional_isParametersAsync("MapSimpleProtobuf")(MapSimpleProtobuf)(
      (p: (input: MapSimpleProtobuf) => Promise<MapSimpleProtobuf>) =>
        typia.functional.isParameters(p),
    );
