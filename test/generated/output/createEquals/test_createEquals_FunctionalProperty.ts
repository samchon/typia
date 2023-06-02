import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";

export const test_createEquals_FunctionalProperty = _test_equals(
    "FunctionalProperty",
    FunctionalProperty.generate,
    (
        input: any,
        _exceptionable: boolean = true,
    ): input is FunctionalProperty => {
        const $io0: any = (
            input: any,
            _exceptionable: boolean = true,
        ): boolean =>
            "string" === typeof input.name &&
            "function" === typeof input.closure &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["name", "closure"].some((prop: any) => key === prop))
                        return true;
                    const value: any = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
