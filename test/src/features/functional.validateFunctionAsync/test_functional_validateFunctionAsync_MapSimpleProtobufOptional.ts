import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_validateFunctionAsync_MapSimpleProtobufOptional =
  _test_functional_validateFunctionAsync("MapSimpleProtobufOptional")(
    MapSimpleProtobufOptional,
  )(
    (
      p: (
        input: MapSimpleProtobufOptional,
      ) => Promise<MapSimpleProtobufOptional>,
    ) => typia.functional.validateFunction(p),
  );
