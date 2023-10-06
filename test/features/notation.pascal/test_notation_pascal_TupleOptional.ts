import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_notation_validatePascal_TupleOptional =
    _test_notation_validateGeneral("TupleOptional")<TupleOptional>(
        TupleOptional
    )<typia.PascalCase<TupleOptional>>({
        convert: typia.notations.createValidatePascal<TupleOptional>(),
        assert: typia.createAssert<typia.PascalCase<TupleOptional>>(),
    });
