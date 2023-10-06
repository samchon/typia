import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_notation_createValidateCamel_TupleRestObject =
    _test_notation_validateGeneral("TupleRestObject")<TupleRestObject>(
        TupleRestObject
    )<typia.CamelCase<TupleRestObject>>({
        convert: (input) => typia.notations.validateCamel<TupleRestObject>(input),
        assert: typia.createAssert<typia.CamelCase<TupleRestObject>>(),
    });
