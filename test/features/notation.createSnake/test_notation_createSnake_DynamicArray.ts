import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_notation_createValidateSnake_DynamicArray =
    _test_notation_validateGeneral("DynamicArray")<DynamicArray>(DynamicArray)<
        typia.SnakeCase<DynamicArray>
    >({
        convert: typia.notations.createValidateSnake<DynamicArray>(),
        assert: typia.createAssert<typia.SnakeCase<DynamicArray>>(),
    });
