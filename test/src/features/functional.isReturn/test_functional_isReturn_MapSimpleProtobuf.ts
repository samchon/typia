import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_functional_isReturn_MapSimpleProtobuf = (): void =>
  _test_functional_isReturn("MapSimpleProtobuf")(MapSimpleProtobuf)(
    (p: (input: MapSimpleProtobuf) => MapSimpleProtobuf) =>
      typia.functional.isReturn(p),
  );
