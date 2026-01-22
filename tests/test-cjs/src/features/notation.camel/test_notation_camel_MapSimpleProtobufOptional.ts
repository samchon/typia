import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_notation_validateCamel_MapSimpleProtobufOptional = (): void =>
  _test_notation_validateGeneral(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)<
    typia.CamelCase<MapSimpleProtobufOptional>
  >({
    convert: (input) =>
      typia.notations.validateCamel<MapSimpleProtobufOptional>(input),
    assert: typia.createAssert<typia.CamelCase<MapSimpleProtobufOptional>>(),
  });
