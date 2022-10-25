import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_namespace = _test_is_stringify(
    "namespace",
    Namespace.generate,
    TSON.createIsStringify<Namespace>(),
);
