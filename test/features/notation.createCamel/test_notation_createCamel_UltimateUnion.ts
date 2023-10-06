import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_notation_createValidateCamel_UltimateUnion =
    _test_notation_validateGeneral("UltimateUnion")<UltimateUnion>(
        UltimateUnion
    )<typia.CamelCase<UltimateUnion>>({
        convert: (input) => typia.notations.validateCamel<UltimateUnion>(input),
        assert: typia.createAssert<typia.CamelCase<UltimateUnion>>(),
    });
