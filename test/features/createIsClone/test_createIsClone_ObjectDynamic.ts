import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createIsClone_ObjectDynamic = _test_isClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createIsClone<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
