import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_notation_createValidatePascal_CommentTagObjectUnion =
    _test_notation_validateGeneral("CommentTagObjectUnion")<CommentTagObjectUnion>(
        CommentTagObjectUnion
    )<typia.PascalCase<CommentTagObjectUnion>>({
        convert: (input) => typia.notations.validatePascal<CommentTagObjectUnion>(input),
        assert: typia.createAssert<typia.PascalCase<CommentTagObjectUnion>>(),
    });
