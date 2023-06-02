import typia from "../../../src";

import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_ObjectOptional = _test_validateClone(
    "ObjectOptional",
    ObjectOptional.generate,
    (input) => typia.validateClone(input),
    ObjectOptional.SPOILERS,
);
