import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_dynamic_tree = _test_validate(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createValidate<DynamicTree>(),
    DynamicTree.SPOILERS,
);
