import TSON from "../../../src";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";
import { _test_is } from "./_test_is";

export const test_is_object_generic_union = _test_is(
    "generic unioned object",
    ObjectGenericUnion.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.answer = [] as any),
        (input) => (input.contents = {} as any),
        (input) => (input.contents[0].id = undefined!),
        (input) => (input.contents[0].body = 3 as any),
        (input) => (input.contents[0].files = {} as any),
    ],
);
