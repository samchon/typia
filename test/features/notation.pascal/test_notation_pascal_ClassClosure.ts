import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ClassClosure } from "../../structures/ClassClosure";

export const test_notation_validatePascal_ClassClosure =
    _test_notation_validateGeneral("ClassClosure")<ClassClosure>(ClassClosure)<
        typia.PascalCase<ClassClosure>
    >({
        convert: (input) => typia.notations.validatePascal<ClassClosure>(input),
        assert: typia.createAssert<typia.PascalCase<ClassClosure>>(),
    });
