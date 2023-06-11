import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_assertEquals } from "../../internal/_test_assertEquals";

export const test_assertEquals_TupleOptional = _test_assertEquals(
    "TupleOptional",
    TupleOptional.generate,
    (input) => typia.assertEquals(input),
);
