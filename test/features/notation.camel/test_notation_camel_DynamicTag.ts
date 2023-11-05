import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicTag } from "../../structures/DynamicTag";

export const test_notation_validateCamel_DynamicTag =
    _test_notation_validateGeneral("DynamicTag")<DynamicTag>(DynamicTag)<
        typia.CamelCase<DynamicTag>
    >({
        convert: (input) => typia.notations.validateCamel<DynamicTag>(input),
        assert: typia.createAssert<typia.CamelCase<DynamicTag>>(),
    });
