import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { CommentTagRangeBigInt } from "../../structures/CommentTagRangeBigInt";

export const test_notation_createValidateCamel_CommentTagRangeBigInt =
    _test_notation_validateGeneral("CommentTagRangeBigInt")<CommentTagRangeBigInt>(
        CommentTagRangeBigInt
    )<typia.CamelCase<CommentTagRangeBigInt>>({
        convert: (input) => typia.notations.validateCamel<CommentTagRangeBigInt>(input),
        assert: typia.createAssert<typia.CamelCase<CommentTagRangeBigInt>>(),
    });
