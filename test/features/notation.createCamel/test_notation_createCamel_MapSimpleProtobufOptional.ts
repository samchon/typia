import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { MapSimpleProtobufOptional } from "../../structures/MapSimpleProtobufOptional";

export const test_notation_createValidateCamel_MapSimpleProtobufOptional =
  _test_notation_validateGeneral(
    "MapSimpleProtobufOptional",
  )<MapSimpleProtobufOptional>(MapSimpleProtobufOptional)<
    typia.CamelCase<MapSimpleProtobufOptional>
  >({
    convert: typia.notations.createValidateCamel<MapSimpleProtobufOptional>(),
    assert: typia.createAssert<typia.CamelCase<MapSimpleProtobufOptional>>(),
  });
