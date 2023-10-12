import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_notation_createValidatePascal_ObjectHttpNullable =
    _test_notation_validateGeneral("ObjectHttpNullable")<ObjectHttpNullable>(
        ObjectHttpNullable,
    )<typia.PascalCase<ObjectHttpNullable>>({
        convert: typia.notations.createValidatePascal<ObjectHttpNullable>(),
        assert: typia.createAssert<typia.PascalCase<ObjectHttpNullable>>(),
    });
