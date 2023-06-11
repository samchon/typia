import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_assertParse_ObjectDynamic = _test_assertParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.assertParse<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);
