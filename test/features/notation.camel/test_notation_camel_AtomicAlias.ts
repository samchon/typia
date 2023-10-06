import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_notation_validateCamel_AtomicAlias =
    _test_notation_validateGeneral("AtomicAlias")<AtomicAlias>(AtomicAlias)<
        typia.CamelCase<AtomicAlias>
    >({
        convert: (input) => typia.notations.validateCamel<AtomicAlias>(input),
        assert: typia.createAssert<typia.CamelCase<AtomicAlias>>(),
    });
