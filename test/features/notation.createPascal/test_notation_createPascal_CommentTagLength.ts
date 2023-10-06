import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_notation_createValidatePascal_CommentTagLength =
    _test_notation_validateGeneral("CommentTagLength")<CommentTagLength>(
        CommentTagLength
    )<typia.PascalCase<CommentTagLength>>({
        convert: (input) => typia.notations.validatePascal<CommentTagLength>(input),
        assert: typia.createAssert<typia.PascalCase<CommentTagLength>>(),
    });
