import TSON from "../../../src";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_is } from "./_test_is";

export const test_is_object_union_double = _test_is(
    "double union object",
    ObjectUnionDouble.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].value = "string" as any),
        (input) => (input[1].child.value.y = "string" as any),
        (input) => (input[2].child.value.y = 0 as any),
        (input) => (input[3].child.value.y = false as any),
    ],
);
