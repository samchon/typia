import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_notation_validateSnake_CommentTagArray =
    _test_notation_validateGeneral("CommentTagArray")<CommentTagArray>(
        CommentTagArray,
    )<typia.SnakeCase<CommentTagArray>>({
        convert: (input) =>
            typia.notations.validateSnake<CommentTagArray>(input),
        assert: typia.createAssert<typia.SnakeCase<CommentTagArray>>(),
    });
