import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobuf } from "../../structures/MapSimpleProtobuf";

export const test_notation_createValidatePascal_MapSimpleProtobuf =
  _test_notation_validateGeneral("MapSimpleProtobuf")<MapSimpleProtobuf>(
    MapSimpleProtobuf,
  )<typia.PascalCase<MapSimpleProtobuf>>({
    convert: typia.notations.createValidatePascal<MapSimpleProtobuf>(),
    assert: typia.createAssert<typia.PascalCase<MapSimpleProtobuf>>(),
  });
