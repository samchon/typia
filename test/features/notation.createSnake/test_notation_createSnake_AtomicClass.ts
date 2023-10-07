import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_notation_createValidateSnake_AtomicClass =
    _test_notation_validateGeneral("AtomicClass")<AtomicClass>(AtomicClass)<
        typia.SnakeCase<AtomicClass>
    >({
        convert: typia.notations.createValidateSnake<AtomicClass>(),
        assert: typia.createAssert<typia.SnakeCase<AtomicClass>>(),
    });
