import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_functional_validateParametersAsync_MapSimpleProtobufNullable =
  _test_functional_validateParametersAsync("MapSimpleProtobufNullable")(
    MapSimpleProtobufNullable,
  )(
    (
      p: (
        input: MapSimpleProtobufNullable,
      ) => Promise<MapSimpleProtobufNullable>,
    ) => typia.functional.validateParameters(p),
  );
