import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_notation_createValidatePascal_ArraySimpleProtobufOptional =
  _test_notation_validateGeneral(
    "ArraySimpleProtobufOptional",
  )<ArraySimpleProtobufOptional>(ArraySimpleProtobufOptional)<
    typia.PascalCase<ArraySimpleProtobufOptional>
  >({
    convert:
      typia.notations.createValidatePascal<ArraySimpleProtobufOptional>(),
    assert: typia.createAssert<typia.PascalCase<ArraySimpleProtobufOptional>>(),
  });
