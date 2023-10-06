import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_notation_createValidatePascal_ObjectUnionNonPredictable =
    _test_notation_validateGeneral(
        "ObjectUnionNonPredictable",
    )<ObjectUnionNonPredictable>(ObjectUnionNonPredictable)<
        typia.PascalCase<ObjectUnionNonPredictable>
    >({
        convert:
            typia.notations.createValidatePascal<ObjectUnionNonPredictable>(),
        assert: typia.createAssert<
            typia.PascalCase<ObjectUnionNonPredictable>
        >(),
    });
