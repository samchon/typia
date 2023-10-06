import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_notation_validateCamel_NativeSimple =
    _test_notation_validateGeneral("NativeSimple")<NativeSimple>(
        NativeSimple
    )<typia.CamelCase<NativeSimple>>({
        convert: typia.notations.createValidateCamel<NativeSimple>(),
        assert: typia.createAssert<typia.CamelCase<NativeSimple>>(),
    });
