import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_notation_createValidateCamel_DynamicComposite =
    _test_notation_validateGeneral("DynamicComposite")<DynamicComposite>(
        DynamicComposite,
    )<typia.CamelCase<DynamicComposite>>({
        convert: typia.notations.createValidateCamel<DynamicComposite>(),
        assert: typia.createAssert<typia.CamelCase<DynamicComposite>>(),
    });
