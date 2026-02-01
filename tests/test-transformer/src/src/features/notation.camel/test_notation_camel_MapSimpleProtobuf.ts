import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_notation_validateCamel_MapSimpleProtobuf = (): void =>
    _test_notation_validateGeneral("MapSimpleProtobuf")<MapSimpleProtobuf>(
        MapSimpleProtobuf
  )<typia.CamelCase<MapSimpleProtobuf>>({
    convert: (input) => typia.notations.validateCamel<MapSimpleProtobuf>(input),
    assert: typia.createAssert<typia.CamelCase<MapSimpleProtobuf>>(),
  });
