import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_createValidateStringify_ArrayRepeatedUnionWithTuple =
    _test_validateStringify(
        "ArrayRepeatedUnionWithTuple",
        ArrayRepeatedUnionWithTuple.generate,
        typia.createValidateStringify<ArrayRepeatedUnionWithTuple>(),
        ArrayRepeatedUnionWithTuple.SPOILERS,
    );
