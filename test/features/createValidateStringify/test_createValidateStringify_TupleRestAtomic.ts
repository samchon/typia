import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createValidateStringify_TupleRestAtomic =
    _test_validateStringify(
        "TupleRestAtomic",
        TupleRestAtomic.generate,
        typia.createValidateStringify<TupleRestAtomic>(),
        TupleRestAtomic.SPOILERS,
    );
