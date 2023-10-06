import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_notation_createValidateCamel_ToJsonArray =
    _test_notation_validateGeneral("ToJsonArray")<ToJsonArray>(ToJsonArray)<
        typia.CamelCase<ToJsonArray>
    >({
        convert: typia.notations.createValidateCamel<ToJsonArray>(),
        assert: typia.createAssert<typia.CamelCase<ToJsonArray>>(),
    });
