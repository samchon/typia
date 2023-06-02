import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_validateStringify_ArrayRepeatedUnionWithTuple =
    _test_validateStringify(
        "ArrayRepeatedUnionWithTuple",
        ArrayRepeatedUnionWithTuple.generate,
        (input) => typia.validateStringify(input),
        ArrayRepeatedUnionWithTuple.SPOILERS,
    );
