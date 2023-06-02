import typia from "../../../src";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ObjectDynamic = _test_validateClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createValidateClone<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
