import TSON from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectDynamic = _test_isClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => TSON.isClone(input),
    ObjectDynamic.SPOILERS,
);