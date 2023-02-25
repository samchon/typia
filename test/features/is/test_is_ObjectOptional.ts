import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectOptional = _test_is(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.is(input),
    ObjectOptional.SPOILERS,
);
