import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ClassClosure = _test_stringify(
    "ClassClosure",
    ClassClosure.generate,
    TSON.createStringify<ClassClosure>(),
);