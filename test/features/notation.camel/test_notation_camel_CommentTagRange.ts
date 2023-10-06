import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_notation_validateCamel_CommentTagRange =
    _test_notation_validateGeneral("CommentTagRange")<CommentTagRange>(
        CommentTagRange,
    )<typia.CamelCase<CommentTagRange>>({
        convert: (input) =>
            typia.notations.validateCamel<CommentTagRange>(input),
        assert: typia.createAssert<typia.CamelCase<CommentTagRange>>(),
    });
