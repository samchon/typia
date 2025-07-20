import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_isFunction_MapSimpleProtobuf = (): void =>
  _test_functional_isFunction("MapSimpleProtobuf")(MapSimpleProtobuf)(
    (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) =>
      typia.functional.isFunction(p),
  );
