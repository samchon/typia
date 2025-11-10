import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_notation_validateKebab_MapSimpleProtobufNullable = (): void =>
  _test_notation_validateGeneral(
    "MapSimpleProtobufNullable",
  )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)<
    typia.KebabCase<MapSimpleProtobufNullable>
  >({
    convert: (input) =>
      typia.notations.validateKebab<MapSimpleProtobufNullable>(input),
    assert: typia.createAssert<typia.KebabCase<MapSimpleProtobufNullable>>(),
  });
