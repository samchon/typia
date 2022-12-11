import TSON from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TupleRestObject =
    _test_validateStringify(
        "TupleRestObject",
        TupleRestObject.generate,
        TSON.createValidateStringify<TupleRestObject>(),
        TupleRestObject.SPOILERS,
    );
