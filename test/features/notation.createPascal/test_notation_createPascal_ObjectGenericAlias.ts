import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_notation_createValidatePascal_ObjectGenericAlias =
    _test_notation_validateGeneral("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias
    )<typia.PascalCase<ObjectGenericAlias>>({
        convert: (input) => typia.notations.validatePascal<ObjectGenericAlias>(input),
        assert: typia.createAssert<typia.PascalCase<ObjectGenericAlias>>(),
    });
