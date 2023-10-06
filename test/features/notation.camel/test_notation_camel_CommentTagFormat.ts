import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_notation_validateCamel_CommentTagFormat =
    _test_notation_validateGeneral("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )<typia.CamelCase<CommentTagFormat>>({
        convert: (input) =>
            typia.notations.validateCamel<CommentTagFormat>(input),
        assert: typia.createAssert<typia.CamelCase<CommentTagFormat>>(),
    });
