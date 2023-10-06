import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_notation_validatePascal_ObjectClosure =
    _test_notation_validateGeneral("ObjectClosure")<ObjectClosure>(
        ObjectClosure,
    )<typia.PascalCase<ObjectClosure>>({
        convert: (input) =>
            typia.notations.validatePascal<ObjectClosure>(input),
        assert: typia.createAssert<typia.PascalCase<ObjectClosure>>(),
    });
