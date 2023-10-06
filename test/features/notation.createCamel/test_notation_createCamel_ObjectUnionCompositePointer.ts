import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_notation_createValidateCamel_ObjectUnionCompositePointer =
    _test_notation_validateGeneral("ObjectUnionCompositePointer")<ObjectUnionCompositePointer>(
        ObjectUnionCompositePointer
    )<typia.CamelCase<ObjectUnionCompositePointer>>({
        convert: (input) => typia.notations.validateCamel<ObjectUnionCompositePointer>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectUnionCompositePointer>>(),
    });
