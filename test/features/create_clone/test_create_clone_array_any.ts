import TSON from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_clone } from "../clone/_test_clone";

export const test_create_clone_array_any = _test_clone(
    "any array",
    ArrayAny.generate,
    TSON.createClone<ArrayAny>(),
);
