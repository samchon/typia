import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_notation_validateSnake_TypeTagTypeUnion =
    _test_notation_validateGeneral("TypeTagTypeUnion")<TypeTagTypeUnion>(
        TypeTagTypeUnion,
    )<typia.SnakeCase<TypeTagTypeUnion>>({
        convert: (input) =>
            typia.notations.validateSnake<TypeTagTypeUnion>(input),
        assert: typia.createAssert<typia.SnakeCase<TypeTagTypeUnion>>(),
    });
