import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_is } from "./../is/_test_is";

export const test_create_is_namespace = _test_is(
    "namespace",
    Namespace.generate,
    TSON.createIs<Namespace>(),
    // UNABLE TO SPOIL
);
