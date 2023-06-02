import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createValidateStringify_TupleRestArray =
    _test_validateStringify(
        "TupleRestArray",
        TupleRestArray.generate,
        typia.createValidateStringify<TupleRestArray>(),
        TupleRestArray.SPOILERS,
    );
