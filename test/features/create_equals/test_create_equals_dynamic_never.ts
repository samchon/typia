import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_dynamic_never = _test_equals(
    "dynamic tree",
    DynamicNever.generate,
    TSON.createEquals<DynamicNever>(),
);
