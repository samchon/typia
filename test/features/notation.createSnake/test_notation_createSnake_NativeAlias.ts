import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeAlias } from "../../structures/NativeAlias";

export const test_notation_createValidateSnake_NativeAlias =
    _test_notation_validateGeneral("NativeAlias")<NativeAlias>(
        NativeAlias
    )<typia.SnakeCase<NativeAlias>>({
        convert: (input) => typia.notations.validateSnake<NativeAlias>(input),
        assert: typia.createAssert<typia.SnakeCase<NativeAlias>>(),
    });
