import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_equals_ClassMethod = _test_equals(
    "ClassMethod",
    ClassMethod.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is ClassMethod.Animal => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.name &&
                "number" === typeof input.age &&
                Number.isFinite(input.age) &&
                (2 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["name", "age"].some((prop) => key === prop))
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        })(input),
);
