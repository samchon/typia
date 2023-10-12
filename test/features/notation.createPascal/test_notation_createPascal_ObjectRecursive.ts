import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_notation_createValidatePascal_ObjectRecursive =
    _test_notation_validateGeneral("ObjectRecursive")<ObjectRecursive>(
        ObjectRecursive,
    )<typia.PascalCase<ObjectRecursive>>({
        convert: typia.notations.createValidatePascal<ObjectRecursive>(),
        assert: typia.createAssert<typia.PascalCase<ObjectRecursive>>(),
    });
