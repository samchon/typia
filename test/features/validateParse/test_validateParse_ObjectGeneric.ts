import typia from "../../../src";

import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_ObjectGeneric = _test_validateParse(
    "ObjectGeneric",
    ObjectGeneric.generate,
    (input) => typia.validateParse<ObjectGeneric>(input),
    ObjectGeneric.SPOILERS,
);
