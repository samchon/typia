import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_notation_validatePascal_CommentTagType =
    _test_notation_validateGeneral("CommentTagType")<CommentTagType>(
        CommentTagType
    )<typia.PascalCase<CommentTagType>>({
        convert: typia.notations.createValidatePascal<CommentTagType>(),
        assert: typia.createAssert<typia.PascalCase<CommentTagType>>(),
    });
