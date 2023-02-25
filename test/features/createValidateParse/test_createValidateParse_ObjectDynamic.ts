import typia from "../../../src";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectDynamic = _test_validateParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createValidateParse<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
