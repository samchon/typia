import typia from "../../../src";

import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectDynamic = _test_clone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createClone<ObjectDynamic>(),
);
