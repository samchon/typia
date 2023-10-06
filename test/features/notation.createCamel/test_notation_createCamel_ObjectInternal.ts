import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_notation_createValidateCamel_ObjectInternal =
    _test_notation_validateGeneral("ObjectInternal")<ObjectInternal>(
        ObjectInternal,
    )<typia.CamelCase<ObjectInternal>>({
        convert: typia.notations.createValidateCamel<ObjectInternal>(),
        assert: typia.createAssert<typia.CamelCase<ObjectInternal>>(),
    });
