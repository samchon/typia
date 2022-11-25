import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ObjectDynamic = _test_assertClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    TSON.createAssertClone<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);