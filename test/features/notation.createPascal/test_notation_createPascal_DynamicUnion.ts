import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_notation_createValidatePascal_DynamicUnion =
    _test_notation_validateGeneral("DynamicUnion")<DynamicUnion>(DynamicUnion)<
        typia.PascalCase<DynamicUnion>
    >({
        convert: typia.notations.createValidatePascal<DynamicUnion>(),
        assert: typia.createAssert<typia.PascalCase<DynamicUnion>>(),
    });
