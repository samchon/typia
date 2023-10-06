import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_notation_createValidateCamel_ClassMethod =
    _test_notation_validateGeneral("ClassMethod")<ClassMethod>(ClassMethod)<
        typia.CamelCase<ClassMethod>
    >({
        convert: typia.notations.createValidateCamel<ClassMethod>(),
        assert: typia.createAssert<typia.CamelCase<ClassMethod>>(),
    });
