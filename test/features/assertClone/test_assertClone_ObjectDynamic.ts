import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_assertClone_ObjectDynamic = _test_assertClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.assertClone<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);
