import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_notation_validatePascal_ObjectUnionNonPredictable =
    _test_notation_validateGeneral(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)<
        typia.PascalCase<ObjectUnionNonPredictable>
    >({
        convert: (input) =>
            typia.notations.validatePascal<ObjectUnionNonPredictable>(input),
        assert: typia.createAssert<
            typia.PascalCase<ObjectUnionNonPredictable>
        >(),
    });
