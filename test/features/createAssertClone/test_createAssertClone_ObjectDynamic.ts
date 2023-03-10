import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_createAssertClone_ObjectDynamic = _test_assertClone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    typia.createAssertClone<ObjectDynamic>(),
    ObjectDynamic.SPOILERS,
);
