import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectClosure = _test_stringify(
    "ObjectClosure",
    ObjectClosure.generate,
    typia.createStringify<ObjectClosure>(),
);