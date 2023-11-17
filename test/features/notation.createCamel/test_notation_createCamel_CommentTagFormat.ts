import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_notation_createValidateCamel_CommentTagFormat =
  _test_notation_validateGeneral("CommentTagFormat")<CommentTagFormat>(
    CommentTagFormat,
  )<typia.CamelCase<CommentTagFormat>>({
    convert: typia.notations.createValidateCamel<CommentTagFormat>(),
    assert: typia.createAssert<typia.CamelCase<CommentTagFormat>>(),
  });
