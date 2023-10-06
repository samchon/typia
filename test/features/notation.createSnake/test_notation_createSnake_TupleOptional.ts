import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_createValidateSnake_TupleOptional =
    _test_notation_validateGeneral("TupleOptional")<TupleOptional>(
        TupleOptional
    )<typia.SnakeCase<TupleOptional>>({
        convert: (input) => typia.notations.validateSnake<TupleOptional>(input),
        assert: typia.createAssert<typia.SnakeCase<TupleOptional>>(),
    });
