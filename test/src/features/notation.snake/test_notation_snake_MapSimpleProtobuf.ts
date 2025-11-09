import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_notation_validateSnake_MapSimpleProtobuf = (): void =>
    _test_notation_validateGeneral("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf
  )<typia.SnakeCase<MapSimpleProtobuf>>({
    convert: (input) => typia.notations.validateSnake<MapSimpleProtobuf>(input),
    assert: typia.createAssert<typia.SnakeCase<MapSimpleProtobuf>>(),
  });
