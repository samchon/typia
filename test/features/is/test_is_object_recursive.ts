import TSON from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_is } from "../is/_test_is";

export const test_is_object_recursive = _test_is(
    "recursive object",
    ObjectRecursive.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.parent = {} as any),
        (input) => (input.parent!.parent!.parent!.code = [] as any),
        (input) => (input.created_at.zone = "korea" as any),
    ],
);
