import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_notation_createValidateCamel_CommentTagType =
    _test_notation_validateGeneral("CommentTagType")<CommentTagType>(
        CommentTagType
    )<typia.CamelCase<CommentTagType>>({
        convert: (input) => typia.notations.validateCamel<CommentTagType>(input),
        assert: typia.createAssert<typia.CamelCase<CommentTagType>>(),
    });
