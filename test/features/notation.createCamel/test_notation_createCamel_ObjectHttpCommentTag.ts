import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_notation_createValidateCamel_ObjectHttpCommentTag =
    _test_notation_validateGeneral("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
        ObjectHttpCommentTag
    )<typia.CamelCase<ObjectHttpCommentTag>>({
        convert: (input) => typia.notations.validateCamel<ObjectHttpCommentTag>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectHttpCommentTag>>(),
    });
