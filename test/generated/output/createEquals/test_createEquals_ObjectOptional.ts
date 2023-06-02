import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_createEquals_ObjectOptional = _test_equals(
    "ObjectOptional",
    ObjectOptional.generate,
    (input: any, _exceptionable: boolean = true): input is ObjectOptional => {
        const $io0: any = (
            input: any,
            _exceptionable: boolean = true,
        ): boolean =>
            (undefined === input.id || "string" === typeof input.id) &&
            (undefined === input.name || "string" === typeof input.name) &&
            (undefined === input.email || "string" === typeof input.email) &&
            (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence))) &&
            (0 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (
                        ["id", "name", "email", "sequence"].some(
                            (prop: any) => key === prop,
                        )
                    )
                        return true;
                    const value: any = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input, true)
        );
    },
);
