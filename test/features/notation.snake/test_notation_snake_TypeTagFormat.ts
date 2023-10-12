import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_notation_validateSnake_TypeTagFormat =
    _test_notation_validateGeneral("TypeTagFormat")<TypeTagFormat>(
        TypeTagFormat,
    )<typia.SnakeCase<TypeTagFormat>>({
        convert: (input) => typia.notations.validateSnake<TypeTagFormat>(input),
        assert: typia.createAssert<typia.SnakeCase<TypeTagFormat>>(),
    });
