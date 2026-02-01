import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_notation_validatePascal_MapSimpleProtobufNullable = (): void =>
    _test_notation_validateGeneral("MapSimpleProtobufNullable")<MapSimpleProtobufNullable>(
        MapSimpleProtobufNullable
  )<typia.PascalCase<MapSimpleProtobufNullable>>({
    convert: (input) => typia.notations.validatePascal<MapSimpleProtobufNullable>(input),
    assert: typia.createAssert<typia.PascalCase<MapSimpleProtobufNullable>>(),
  });
