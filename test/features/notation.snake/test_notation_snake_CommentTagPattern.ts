import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_notation_validateSnake_CommentTagPattern =
    _test_notation_validateGeneral("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern,
    )<typia.SnakeCase<CommentTagPattern>>({
        convert: (input) =>
            typia.notations.validateSnake<CommentTagPattern>(input),
        assert: typia.createAssert<typia.SnakeCase<CommentTagPattern>>(),
    });
