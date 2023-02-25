import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_ObjectOptional = _test_validateEquals(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.validateEquals(input),
);
