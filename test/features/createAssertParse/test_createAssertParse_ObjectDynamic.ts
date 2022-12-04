import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_ObjectDynamic = _test_assertParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    TSON.createAssertParse<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
