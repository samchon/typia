import TSON from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_is } from "../is/_test_is";

export const test_is_object_nullable = _test_is(
    "nullable object",
    ObjectNullable.generate,
    (input) => TSON.is(input),
    [
        (input) => (input[0].manufacturer = {} as any),
        (input) =>
            (input[0].brand = {
                type: "manufacturer" as "brand",
                name: "name",
            }),
        (input) => (input[0].similar = undefined!),
        (input) => (input[0].similar = [] as any),
        (input) => (input[0].similar = {} as any),
        (input) =>
            (input[0].similar = {
                type: "something" as "manufacturer",
                name: "something",
            }),
    ],
);
