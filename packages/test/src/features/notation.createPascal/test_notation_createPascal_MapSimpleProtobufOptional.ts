import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_notation_createValidatePascal_MapSimpleProtobufOptional =
  _test_notation_validateGeneral(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)<
    typia.PascalCase<MapSimpleProtobufOptional>
  >({
    convert: typia.notations.createValidatePascal<MapSimpleProtobufOptional>(),
    assert: typia.createAssert<typia.PascalCase<MapSimpleProtobufOptional>>(),
  });
