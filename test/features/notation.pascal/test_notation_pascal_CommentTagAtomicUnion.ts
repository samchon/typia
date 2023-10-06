import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_notation_validatePascal_CommentTagAtomicUnion =
    _test_notation_validateGeneral("CommentTagAtomicUnion")<CommentTagAtomicUnion>(
        CommentTagAtomicUnion
    )<typia.PascalCase<CommentTagAtomicUnion>>({
        convert: typia.notations.createValidatePascal<CommentTagAtomicUnion>(),
        assert: typia.createAssert<typia.PascalCase<CommentTagAtomicUnion>>(),
    });
