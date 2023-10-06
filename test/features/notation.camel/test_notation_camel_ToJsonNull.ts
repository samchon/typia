import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_notation_validateCamel_ToJsonNull =
    _test_notation_validateGeneral("ToJsonNull")<ToJsonNull>(ToJsonNull)<
        typia.CamelCase<ToJsonNull>
    >({
        convert: (input) => typia.notations.validateCamel<ToJsonNull>(input),
        assert: typia.createAssert<typia.CamelCase<ToJsonNull>>(),
    });
