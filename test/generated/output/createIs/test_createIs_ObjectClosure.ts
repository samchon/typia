import typia from "../../../../src";
import { ObjectClosure } from "../../../structures/ObjectClosure";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectClosure = _test_is(
    "ObjectClosure",
    ObjectClosure.generate,
    (input: any): input is ObjectClosure.IRecord => {
        const $io0 = (input: any): boolean =>
            "string" === typeof input.id && "function" === typeof input.open;
        return "object" === typeof input && null !== input && $io0(input);
    },
    ObjectClosure.SPOILERS,
);
