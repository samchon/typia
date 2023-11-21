import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectSimpleProtobuf } from "../../structures/ObjectSimpleProtobuf";

export const test_notation_createValidatePascal_ObjectSimpleProtobuf =
  _test_notation_validateGeneral("ObjectSimpleProtobuf")<ObjectSimpleProtobuf>(
    ObjectSimpleProtobuf,
  )<typia.PascalCase<ObjectSimpleProtobuf>>({
    convert: typia.notations.createValidatePascal<ObjectSimpleProtobuf>(),
    assert: typia.createAssert<typia.PascalCase<ObjectSimpleProtobuf>>(),
  });
