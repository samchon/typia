import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_notation_createValidateCamel_ObjectGenericAlias =
    _test_notation_validateGeneral("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias
    )<typia.CamelCase<ObjectGenericAlias>>({
        convert: (input) => typia.notations.validateCamel<ObjectGenericAlias>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectGenericAlias>>(),
    });
