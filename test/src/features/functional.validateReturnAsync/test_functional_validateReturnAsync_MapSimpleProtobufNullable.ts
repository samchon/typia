import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_validateReturnAsync_MapSimpleProtobufNullable =
  _test_functional_validateReturnAsync("MapSimpleProtobufNullable")(
    MapSimpleProtobufNullable,
  )(
    (
      p: (
        input: MapSimpleProtobufNullable,
      ) => Promise<MapSimpleProtobufNullable>,
    ) => typia.functional.validateReturn(p),
  );
