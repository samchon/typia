import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArrayUnion } from "../../structures/CommentTagArrayUnion";

export const test_notation_createValidatePascal_CommentTagArrayUnion =
    _test_notation_validateGeneral(
        "CommentTagArrayUnion",
    )<CommentTagArrayUnion>(CommentTagArrayUnion)<
        typia.PascalCase<CommentTagArrayUnion>
    >({
        convert: typia.notations.createValidatePascal<CommentTagArrayUnion>(),
        assert: typia.createAssert<typia.PascalCase<CommentTagArrayUnion>>(),
    });
