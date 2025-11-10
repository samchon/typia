import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufNullable } from "../../structures/MapSimpleProtobufNullable";

export const test_notation_createValidateKebab_MapSimpleProtobufNullable =
  (): void =>
    _test_notation_validateGeneral(
      "MapSimpleProtobufNullable",
    )<MapSimpleProtobufNullable>(MapSimpleProtobufNullable)<
      typia.KebabCase<MapSimpleProtobufNullable>
    >({
      convert: typia.notations.createValidateKebab<MapSimpleProtobufNullable>(),
      assert: typia.createAssert<typia.KebabCase<MapSimpleProtobufNullable>>(),
    });
