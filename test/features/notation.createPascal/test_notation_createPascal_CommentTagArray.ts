import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagArray } from "../../structures/CommentTagArray";

export const test_notation_createValidatePascal_CommentTagArray =
    _test_notation_validateGeneral("CommentTagArray")<CommentTagArray>(
        CommentTagArray
    )<typia.PascalCase<CommentTagArray>>({
        convert: (input) => typia.notations.validatePascal<CommentTagArray>(input),
        assert: typia.createAssert<typia.PascalCase<CommentTagArray>>(),
    });
