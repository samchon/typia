import typia from "../../../src";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_ObjectDynamic = _test_validateClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.validateClone(input),
    ObjectDynamic.SPOILERS,
);
