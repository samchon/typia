import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_notation_validateCamel_ArrayAtomicSimple =
    _test_notation_validateGeneral("ArrayAtomicSimple")<ArrayAtomicSimple>(
        ArrayAtomicSimple,
    )<typia.CamelCase<ArrayAtomicSimple>>({
        convert: (input) =>
            typia.notations.validateCamel<ArrayAtomicSimple>(input),
        assert: typia.createAssert<typia.CamelCase<ArrayAtomicSimple>>(),
    });
