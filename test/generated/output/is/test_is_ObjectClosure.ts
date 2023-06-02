import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_is_ObjectClosure = _test_is(
    "ObjectClosure",
    ObjectClosure.generate,
    (input) =>
        ((input: any): input is { id: string; open: () => string } => {
            const $io0: any = (input: any): boolean =>
                "string" === typeof input.id &&
                "function" === typeof input.open;
            return "object" === typeof input && null !== input && $io0(input);
        })(input),
    ObjectClosure.SPOILERS,
);
