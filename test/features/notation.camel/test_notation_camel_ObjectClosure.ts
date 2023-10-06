import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectClosure } from "../../structures/ObjectClosure";

export const test_notation_validateCamel_ObjectClosure =
    _test_notation_validateGeneral("ObjectClosure")<ObjectClosure>(
        ObjectClosure
    )<typia.CamelCase<ObjectClosure>>({
        convert: typia.notations.createValidateCamel<ObjectClosure>(),
        assert: typia.createAssert<typia.CamelCase<ObjectClosure>>(),
    });
