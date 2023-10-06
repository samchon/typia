import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";

export const test_notation_validateSnake_ObjectPropertyNullable =
    _test_notation_validateGeneral(
        "ObjectPropertyNullable",
    )<ObjectPropertyNullable>(ObjectPropertyNullable)<
        typia.SnakeCase<ObjectPropertyNullable>
    >({
        convert: (input) =>
            typia.notations.validateSnake<ObjectPropertyNullable>(input),
        assert: typia.createAssert<typia.SnakeCase<ObjectPropertyNullable>>(),
    });
