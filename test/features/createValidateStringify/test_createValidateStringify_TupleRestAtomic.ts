import TSON from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_TupleRestAtomic =
    _test_validateStringify(
        "TupleRestAtomic",
        TupleRestAtomic.generate,
        TSON.createValidateStringify<TupleRestAtomic>(),
        TupleRestAtomic.SPOILERS,
    );
