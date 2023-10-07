import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_notation_validatePascal_ObjectGenericArray =
    _test_notation_validateGeneral("ObjectGenericArray")<ObjectGenericArray>(
        ObjectGenericArray,
    )<typia.PascalCase<ObjectGenericArray>>({
        convert: (input) =>
            typia.notations.validatePascal<ObjectGenericArray>(input),
        assert: typia.createAssert<typia.PascalCase<ObjectGenericArray>>(),
    });
