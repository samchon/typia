import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_functional_validateParameters_MapSimpleProtobufOptional =
  _test_functional_validateParameters("MapSimpleProtobufOptional")(
    MapSimpleProtobufOptional,
  )((p: (input: MapSimpleProtobufOptional) => MapSimpleProtobufOptional) =>
    typia.functional.validateParameters(p),
  );
