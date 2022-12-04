import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectDynamic = _test_isParse(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => TSON.isParse<ObjectDynamic>(input),
    ObjectDynamic.SPOILERS,
);
