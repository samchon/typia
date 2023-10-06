import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_notation_validatePascal_CommentTagPattern =
    _test_notation_validateGeneral("CommentTagPattern")<CommentTagPattern>(
        CommentTagPattern
    )<typia.PascalCase<CommentTagPattern>>({
        convert: typia.notations.createValidatePascal<CommentTagPattern>(),
        assert: typia.createAssert<typia.PascalCase<CommentTagPattern>>(),
    });
