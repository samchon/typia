import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_notation_createValidateCamel_AtomicUnion =
    _test_notation_validateGeneral("AtomicUnion")<AtomicUnion>(AtomicUnion)<
        typia.CamelCase<AtomicUnion>
    >({
        convert: typia.notations.createValidateCamel<AtomicUnion>(),
        assert: typia.createAssert<typia.CamelCase<AtomicUnion>>(),
    });
