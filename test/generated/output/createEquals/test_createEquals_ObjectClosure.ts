import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_createEquals_ObjectClosure = _test_equals(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)(
    (input: any, _exceptionable: boolean = true): input is ObjectClosure => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            "function" === typeof input.open &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["id", "open"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
