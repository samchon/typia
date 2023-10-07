import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_notation_createValidateCamel_ObjectHttpUndefindable =
    _test_notation_validateGeneral(
        "ObjectHttpUndefindable",
    )<ObjectHttpUndefindable>(ObjectHttpUndefindable)<
        typia.CamelCase<ObjectHttpUndefindable>
    >({
        convert: typia.notations.createValidateCamel<ObjectHttpUndefindable>(),
        assert: typia.createAssert<typia.CamelCase<ObjectHttpUndefindable>>(),
    });
