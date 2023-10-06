import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_notation_createValidateCamel_ToJsonUnion =
    _test_notation_validateGeneral("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)<
        typia.CamelCase<ToJsonUnion>
    >({
        convert: typia.notations.createValidateCamel<ToJsonUnion>(),
        assert: typia.createAssert<typia.CamelCase<ToJsonUnion>>(),
    });
