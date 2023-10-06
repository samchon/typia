import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagBigInt } from "../../structures/CommentTagBigInt";

export const test_notation_validatePascal_CommentTagBigInt =
    _test_notation_validateGeneral("CommentTagBigInt")<CommentTagBigInt>(
        CommentTagBigInt
    )<typia.PascalCase<CommentTagBigInt>>({
        convert: typia.notations.createValidatePascal<CommentTagBigInt>(),
        assert: typia.createAssert<typia.PascalCase<CommentTagBigInt>>(),
    });
