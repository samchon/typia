import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_notation_validateCamel_AtomicClass =
    _test_notation_validateGeneral("AtomicClass")<AtomicClass>(AtomicClass)<
        typia.CamelCase<AtomicClass>
    >({
        convert: (input) => typia.notations.validateCamel<AtomicClass>(input),
        assert: typia.createAssert<typia.CamelCase<AtomicClass>>(),
    });
