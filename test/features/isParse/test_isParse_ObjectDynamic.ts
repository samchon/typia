import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_isParse_ObjectDynamic = _test_isParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.isParse<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);
