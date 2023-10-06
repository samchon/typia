import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_notation_validatePascal_TypeTagTuple =
    _test_notation_validateGeneral("TypeTagTuple")<TypeTagTuple>(TypeTagTuple)<
        typia.PascalCase<TypeTagTuple>
    >({
        convert: (input) => typia.notations.validatePascal<TypeTagTuple>(input),
        assert: typia.createAssert<typia.PascalCase<TypeTagTuple>>(),
    });
