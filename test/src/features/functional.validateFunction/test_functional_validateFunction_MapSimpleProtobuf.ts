import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_validateFunction_MapSimpleProtobuf =
  _test_functional_validateFunction("MapSimpleProtobuf")(MapSimpleProtobuf)(
    (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) =>
      typia.functional.validateFunction(p),
  );
