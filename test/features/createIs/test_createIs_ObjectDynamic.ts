import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectDynamic = _test_is(
    "ObjectDynamic",
    ObjectDynamic.generate,
    TSON.createIs<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
