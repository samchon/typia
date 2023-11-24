import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_notation_createValidatePascal_MapSimpleProtobufNullable =
  _test_notation_validateGeneral(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)<
    typia.PascalCase<MapSimpleProtobufNullable>
  >({
    convert: typia.notations.createValidatePascal<MapSimpleProtobufNullable>(),
    assert: typia.createAssert<typia.PascalCase<MapSimpleProtobufNullable>>(),
  });
