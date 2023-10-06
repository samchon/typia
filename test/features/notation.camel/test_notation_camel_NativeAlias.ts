import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_notation_validateCamel_NativeAlias =
    _test_notation_validateGeneral("NativeAlias")<NativeAlias>(
        NativeAlias
    )<typia.CamelCase<NativeAlias>>({
        convert: typia.notations.createValidateCamel<NativeAlias>(),
        assert: typia.createAssert<typia.CamelCase<NativeAlias>>(),
    });
