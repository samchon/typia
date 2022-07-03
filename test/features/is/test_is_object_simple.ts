import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_is } from "./_test_is";

export const test_is_object = _test_is(
    "simple object",
    ObjectSimple.generate,
    (input) => TSON.is(input),
    [
        (input) => (input.scale.x = undefined!),
        (input) => (input.scale.y = false as any),
        (input) => (input.scale.z = {} as any),
        (input) => (input.position.x = null!),
        (input) => (input.position.y = "y-axis-value" as any),
        (input) => (input.position.z = [] as any),
        (input) => (input.rotate = null!),
        (input) => (input.pivot = [] as any),
    ],
);
