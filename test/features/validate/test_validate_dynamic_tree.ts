import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_dynamic_tree = _test_validate(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.validate(input),
    DynamicTree.SPOILERS,
);
