import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_createEquals_ClassMethod = _test_equals(
    "ClassMethod",
    ClassMethod.generate,
    (input: any, _exceptionable: boolean = true): input is ClassMethod => {
        const $io0: any = (
            input: any,
            _exceptionable: boolean = true,
        ): boolean =>
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age) &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["name", "age"].some((prop: any) => key === prop))
                        return true;
                    const value: any = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    },
);
