import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_notation_validateCamel_ObjectJsonTag =
  _test_notation_validateGeneral("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)<
    typia.CamelCase<ObjectJsonTag>
  >({
    convert: (input) => typia.notations.validateCamel<ObjectJsonTag>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectJsonTag>>(),
  });
