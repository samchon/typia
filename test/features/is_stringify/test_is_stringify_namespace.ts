import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_namespace = _test_is_stringify(
    "namespace",
    Namespace.generate,
    (input) => TSON.isStringify(input),
);
