import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_notation_validateSnake_CommentTagType =
    _test_notation_validateGeneral("CommentTagType")<CommentTagType>(
        CommentTagType
    )<typia.SnakeCase<CommentTagType>>({
        convert: typia.notations.createValidateSnake<CommentTagType>(),
        assert: typia.createAssert<typia.SnakeCase<CommentTagType>>(),
    });
