import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_notation_createValidateSnake_MapSimpleProtobuf = (): void =>
  _test_notation_validateGeneral("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf,
  )<typia.SnakeCase<MapSimpleProtobuf>>({
    convert: typia.notations.createValidateSnake<MapSimpleProtobuf>(),
    assert: typia.createAssert<typia.SnakeCase<MapSimpleProtobuf>>(),
  });
