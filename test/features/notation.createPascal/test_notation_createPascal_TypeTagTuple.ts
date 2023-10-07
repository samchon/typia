import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_notation_createValidatePascal_TypeTagTuple =
    _test_notation_validateGeneral("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)<
        typia.PascalCase<TypeTagTuple>
    >({
        convert: typia.notations.createValidatePascal<TypeTagTuple>(),
        assert: typia.createAssert<typia.PascalCase<TypeTagTuple>>(),
    });
