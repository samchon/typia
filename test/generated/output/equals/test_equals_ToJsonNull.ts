import typia from "../../../../src";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_ToJsonNull = _test_equals(
    "ToJsonNull",
    ToJsonNull.generate,
    (input) =>
        ((input: any, _exceptionable: boolean = true): input is ToJsonNull => {
            const $io0 = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "function" === typeof input.toJSON &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key) => {
                        if (["toJSON"].some((prop) => key === prop))
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
