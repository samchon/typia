import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_notation_validateKebab_MapSimpleProtobufOptional = (): void =>
  _test_notation_validateGeneral(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)<
    typia.KebabCase<MapSimpleProtobufOptional>
  >({
    convert: (input) =>
      typia.notations.validateKebab<MapSimpleProtobufOptional>(input),
    assert: typia.createAssert<typia.KebabCase<MapSimpleProtobufOptional>>(),
  });
