import typia from "../../../src";

import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_is } from "../../internal/_test_is";

export const test_is_ArrayAtomicAlias = _test_is(
    "ArrayAtomicAlias",
    ArrayAtomicAlias.generate,
    (input) => typia.is(input),
    ArrayAtomicAlias.SPOILERS,
);
