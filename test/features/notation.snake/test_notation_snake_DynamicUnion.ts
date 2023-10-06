import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_notation_validateSnake_DynamicUnion =
    _test_notation_validateGeneral("DynamicUnion")<DynamicUnion>(DynamicUnion)<
        typia.SnakeCase<DynamicUnion>
    >({
        convert: (input) => typia.notations.validateSnake<DynamicUnion>(input),
        assert: typia.createAssert<typia.SnakeCase<DynamicUnion>>(),
    });
