import typia from "../../../src";

import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectUnionDouble = _test_validateParse(
    "ObjectUnionDouble",
    ObjectUnionDouble.generate,
    typia.createValidateParse<ObjectUnionDouble>(),
    ObjectUnionDouble.SPOILERS,
);
