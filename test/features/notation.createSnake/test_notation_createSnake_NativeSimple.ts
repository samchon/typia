import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { NativeSimple } from "../../structures/NativeSimple";

export const test_notation_createValidateSnake_NativeSimple =
    _test_notation_validateGeneral("NativeSimple")<NativeSimple>(NativeSimple)<
        typia.SnakeCase<NativeSimple>
    >({
        convert: typia.notations.createValidateSnake<NativeSimple>(),
        assert: typia.createAssert<typia.SnakeCase<NativeSimple>>(),
    });
