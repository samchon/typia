import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_validateCamel_TupleOptional =
    _test_notation_validateGeneral("TupleOptional")<TupleOptional>(
        TupleOptional,
    )<typia.CamelCase<TupleOptional>>({
        convert: (input) => typia.notations.validateCamel<TupleOptional>(input),
        assert: typia.createAssert<typia.CamelCase<TupleOptional>>(),
    });
