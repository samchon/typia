import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_notation_createValidateKebab_MapSimpleProtobuf = (): void =>
  _test_notation_validateGeneral("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf,
  )<typia.KebabCase<MapSimpleProtobuf>>({
    convert: typia.notations.createValidateKebab<MapSimpleProtobuf>(),
    assert: typia.createAssert<typia.KebabCase<MapSimpleProtobuf>>(),
  });
