import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_notation_validateCamel_ToJsonAtomicSimple =
    _test_notation_validateGeneral("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
        ToJsonAtomicSimple,
    )<typia.CamelCase<ToJsonAtomicSimple>>({
        convert: (input) =>
            typia.notations.validateCamel<ToJsonAtomicSimple>(input),
        assert: typia.createAssert<typia.CamelCase<ToJsonAtomicSimple>>(),
    });
