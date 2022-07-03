import TSON from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
import { _test_is } from "./_test_is";

export const test_is_object_primitive = _test_is(
    "primitive object",
    ObjectPrimitive.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.id = null!),
        (input) => (input.extension = "exe" as "md"),
        (input) => (input.title = 0 as any),
        (input) => (input.body = [] as any),
        (input) => (input.files = {} as any),
        (input) => (input.files[0].created_at = new Date() as any),
        (input) => (input.secret = "Y" as any),
        (input) => (input.created_at = new Date() as any),
    ],
);
