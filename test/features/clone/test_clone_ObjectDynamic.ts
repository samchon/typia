import typia from "../../../src";
import { ObjectDynamic } from "../../structures/ObjectDynamic";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectDynamic = _test_clone(
    "ObjectDynamic",
    ObjectDynamic.generate,
    (input) => typia.clone(input),
);