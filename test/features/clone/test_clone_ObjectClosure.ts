import TSON from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_ObjectClosure = _test_clone(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) => TSON.clone(input),
);