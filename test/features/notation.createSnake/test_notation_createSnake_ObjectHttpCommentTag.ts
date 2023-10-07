import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_notation_createValidateSnake_ObjectHttpCommentTag =
    _test_notation_validateGeneral(
        "ObjectHttpCommentTag",
    )<ObjectHttpCommentTag>(ObjectHttpCommentTag)<
        typia.SnakeCase<ObjectHttpCommentTag>
    >({
        convert: typia.notations.createValidateSnake<ObjectHttpCommentTag>(),
        assert: typia.createAssert<typia.SnakeCase<ObjectHttpCommentTag>>(),
    });
