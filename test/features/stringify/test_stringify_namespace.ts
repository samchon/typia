import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_stringify } from "./_test_stringify";

export const test_stringify_namespace = _test_stringify(
    "namespace",
    Namespace.generate,
    (input) => TSON.stringify(input),
);
