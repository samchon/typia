import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagInfinite } from "../../structures/CommentTagInfinite";

export const test_notation_validatePascal_CommentTagInfinite =
    _test_notation_validateGeneral("CommentTagInfinite")<CommentTagInfinite>(
        CommentTagInfinite,
    )<typia.PascalCase<CommentTagInfinite>>({
        convert: (input) =>
            typia.notations.validatePascal<CommentTagInfinite>(input),
        assert: typia.createAssert<typia.PascalCase<CommentTagInfinite>>(),
    });
