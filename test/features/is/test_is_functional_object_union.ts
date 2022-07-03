import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_is } from "./_test_is";

export const test_is_functional_object_union = _test_is(
    "functional union object",
    FunctionalObjectUnion.generate,
    (input) => TSON.is(input),
    [
        (input) =>
            (input[0] = (input[0] as FunctionalObjectUnion.IPoint).distance =
                null!),
        (input) =>
            ((input[1] as FunctionalObjectUnion.ILine).length = {} as any),
        (input) =>
            ((input[1] as FunctionalObjectUnion.ILine).p2.distance = [] as any),
    ],
);
