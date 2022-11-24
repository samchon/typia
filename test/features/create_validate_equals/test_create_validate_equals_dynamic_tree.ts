import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validate_equals } from "../internal/_test_validate_equals";

export const test_create_validate_equals_dynamic_tree = _test_validate_equals(
    "dynamic tree",
    DynamicTree.generate,
    TSON.createValidateEquals<DynamicTree>(),
    false,
);
