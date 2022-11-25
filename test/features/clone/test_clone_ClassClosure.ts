import TSON from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ClassClosure = _test_clone(
    "ClassClosure",
    ClassClosure.generate,
    (input) => TSON.clone(input),
);
