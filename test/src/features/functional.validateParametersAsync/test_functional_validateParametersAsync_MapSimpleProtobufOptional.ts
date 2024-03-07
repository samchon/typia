import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_validateParametersAsync_MapSimpleProtobufOptional =
  _test_functional_validateParametersAsync("MapSimpleProtobufOptional")(
    MapSimpleProtobufOptional,
  )(
    (
      p: (
        input: MapSimpleProtobufOptional,
      ) => Promise<MapSimpleProtobufOptional>,
    ) => typia.functional.validateParameters(p),
  );
