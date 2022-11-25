import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectDynamic = _test_isClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    TSON.createIsClone<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
