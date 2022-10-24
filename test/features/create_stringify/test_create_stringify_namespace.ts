import TSON from "../../../src";
import { Namespace } from "../../structures/Namespace";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_namespace = _test_stringify(
    "namespace",
    Namespace.generate,
    TSON.createStringify<Namespace>(),
);
