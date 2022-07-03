import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_is } from "./_test_is";

export const test_is_namespace = _test_is(
    "namespace",
    Namespace.generate,
    (input) => TSON.is(input),
    // UNABLE TO SPOIL
);
