import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_notation_validatePascal_MapSimpleProtobuf =
  _test_notation_validateGeneral("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf,
  )<typia.PascalCase<MapSimpleProtobuf>>({
    convert: (input) =>
      typia.notations.validatePascal<MapSimpleProtobuf>(input),
    assert: typia.createAssert<typia.PascalCase<MapSimpleProtobuf>>(),
  });
