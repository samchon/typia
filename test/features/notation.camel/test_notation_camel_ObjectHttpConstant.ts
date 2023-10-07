import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_notation_validateCamel_ObjectHttpConstant =
    _test_notation_validateGeneral("ObjectHttpConstant")<ObjectHttpConstant>(
        ObjectHttpConstant,
    )<typia.CamelCase<ObjectHttpConstant>>({
        convert: (input) =>
            typia.notations.validateCamel<ObjectHttpConstant>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectHttpConstant>>(),
    });
