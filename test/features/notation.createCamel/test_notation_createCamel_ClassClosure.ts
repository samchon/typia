import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_notation_createValidateCamel_ClassClosure =
    _test_notation_validateGeneral("ClassClosure")<ClassClosure>(ClassClosure)<
        typia.CamelCase<ClassClosure>
    >({
        convert: typia.notations.createValidateCamel<ClassClosure>(),
        assert: typia.createAssert<typia.CamelCase<ClassClosure>>(),
    });
