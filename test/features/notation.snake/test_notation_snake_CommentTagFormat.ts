import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_notation_validateSnake_CommentTagFormat =
    _test_notation_validateGeneral("CommentTagFormat")<CommentTagFormat>(
        CommentTagFormat,
    )<typia.SnakeCase<CommentTagFormat>>({
        convert: (input) =>
            typia.notations.validateSnake<CommentTagFormat>(input),
        assert: typia.createAssert<typia.SnakeCase<CommentTagFormat>>(),
    });
