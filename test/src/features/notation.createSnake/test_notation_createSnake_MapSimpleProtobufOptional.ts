import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_notation_createValidateSnake_MapSimpleProtobufOptional = (): void =>
    _test_notation_validateGeneral("MapSimpleProtobufOptional")<MapSimpleProtobufOptional>(
        MapSimpleProtobufOptional
  )<typia.SnakeCase<MapSimpleProtobufOptional>>({
    convert: typia.notations.createValidateSnake<MapSimpleProtobufOptional>(),
    assert: typia.createAssert<typia.SnakeCase<MapSimpleProtobufOptional>>(),
  });
