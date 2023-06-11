import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createAssertParse_ObjectDynamic = _test_assertParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createAssertParse<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
