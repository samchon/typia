import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_notation_validateCamel_ObjectRequired =
    _test_notation_validateGeneral("ObjectRequired")<ObjectRequired>(
        ObjectRequired,
    )<typia.CamelCase<ObjectRequired>>({
        convert: (input) =>
            typia.notations.validateCamel<ObjectRequired>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectRequired>>(),
    });
