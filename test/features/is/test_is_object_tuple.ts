import TSON from "../../../src";
import { ObjectTuple } from "../../structures/ObjectTuple";
import { _test_is } from "./_test_is";

export const test_is_object_tuple = _test_is(
    "union object",
    ObjectTuple.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].id = false as any),
        (input) => (input[0].code = undefined!),
        (input) => (input[0].name = null!),
        (input) => (input[1].id = {} as any),
        (input) => (input[1].mobile = null!),
        (input) => (input[1].name = [] as any),
        (input) =>
            (input[0] = {
                id: "string",
                mobile: "string",
                name: "string",
            } as any),
        (input) =>
            (input[1] = {
                id: "string",
                code: "string",
                name: "string",
            } as any),
    ],
);
