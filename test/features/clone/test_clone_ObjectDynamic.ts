import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_clone_ObjectDynamic = _test_clone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.clone<ObjectDynamic>(input),
);
