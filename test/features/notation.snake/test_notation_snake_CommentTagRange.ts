import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_notation_validateSnake_CommentTagRange =
    _test_notation_validateGeneral("CommentTagRange")<CommentTagRange>(
        CommentTagRange,
    )<typia.SnakeCase<CommentTagRange>>({
        convert: (input) =>
            typia.notations.validateSnake<CommentTagRange>(input),
        assert: typia.createAssert<typia.SnakeCase<CommentTagRange>>(),
    });
