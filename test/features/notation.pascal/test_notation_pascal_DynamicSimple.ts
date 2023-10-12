import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_notation_validatePascal_DynamicSimple =
    _test_notation_validateGeneral("DynamicSimple")<DynamicSimple>(
        DynamicSimple,
    )<typia.PascalCase<DynamicSimple>>({
        convert: (input) =>
            typia.notations.validatePascal<DynamicSimple>(input),
        assert: typia.createAssert<typia.PascalCase<DynamicSimple>>(),
    });
