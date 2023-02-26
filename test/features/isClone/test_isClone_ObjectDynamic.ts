import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_isClone_ObjectDynamic = _test_isClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.isClone(input),
    ObjectDynamic.SPOILERS,
);
