import typia from "../../../src";

import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_validateParse } from "../../internal/_test_validateParse";

export const test_validateParse_ObjectGenericUnion = _test_validateParse(
    "ObjectGenericUnion",
    ObjectGenericUnion.generate,
    (input) => typia.validateParse<ObjectGenericUnion>(input),
    ObjectGenericUnion.SPOILERS,
);
