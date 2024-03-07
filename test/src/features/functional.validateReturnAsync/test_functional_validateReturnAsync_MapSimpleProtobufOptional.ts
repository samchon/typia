import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_validateReturnAsync_MapSimpleProtobufOptional =
  _test_functional_validateReturnAsync("MapSimpleProtobufOptional")(
    MapSimpleProtobufOptional,
  )(
    (
      p: (
        input: MapSimpleProtobufOptional,
      ) => Promise<MapSimpleProtobufOptional>,
    ) => typia.functional.validateReturn(p),
  );
