import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_notation_validateCamel_ObjectInternal =
    _test_notation_validateGeneral("ObjectInternal")<ObjectInternal>(
        ObjectInternal,
    )<typia.CamelCase<ObjectInternal>>({
        convert: (input) =>
            typia.notations.validateCamel<ObjectInternal>(input),
        assert: typia.createAssert<typia.CamelCase<ObjectInternal>>(),
    });
