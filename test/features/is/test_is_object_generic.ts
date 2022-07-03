import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_is } from "./_test_is";

export const test_is_object_generic = _test_is(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].child.child_next = 3 as any),
        (input) => (input[1].value = false as any),
        (input) => (input[2].elements = [3 as any]),
    ],
);
