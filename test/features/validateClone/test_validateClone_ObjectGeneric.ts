import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_validateClone_ObjectGeneric = _test_validateClone(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.validateClone(input),
    ObjectGeneric.SPOILERS,
);
