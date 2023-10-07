import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_notation_validateCamel_ClassMethod =
    _test_notation_validateGeneral("ClassMethod")<ClassMethod>(ClassMethod)<
        typia.CamelCase<ClassMethod>
    >({
        convert: (input) => typia.notations.validateCamel<ClassMethod>(input),
        assert: typia.createAssert<typia.CamelCase<ClassMethod>>(),
    });
