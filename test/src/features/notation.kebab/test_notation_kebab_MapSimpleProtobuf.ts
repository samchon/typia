import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_notation_validateKebab_MapSimpleProtobuf = (): void =>
  _test_notation_validateGeneral("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf,
  )<typia.KebabCase<MapSimpleProtobuf>>({
    convert: (input) => typia.notations.validateKebab<MapSimpleProtobuf>(input),
    assert: typia.createAssert<typia.KebabCase<MapSimpleProtobuf>>(),
  });
