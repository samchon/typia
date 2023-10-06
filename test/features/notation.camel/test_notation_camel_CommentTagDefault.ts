import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_notation_validateCamel_CommentTagDefault =
    _test_notation_validateGeneral("CommentTagDefault")<CommentTagDefault>(
        CommentTagDefault
    )<typia.CamelCase<CommentTagDefault>>({
        convert: typia.notations.createValidateCamel<CommentTagDefault>(),
        assert: typia.createAssert<typia.CamelCase<CommentTagDefault>>(),
    });
