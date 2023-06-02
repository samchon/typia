import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createEquals_ToJsonDouble = _test_equals(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: any, _exceptionable: boolean = true): input is ToJsonDouble => {
        const $io0: any = (
            input: any,
            _exceptionable: boolean = true,
        ): boolean =>
            0 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
                const value: any = input[key];
                if (undefined === value) return true;
                return false;
            });
        return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input, true)
        );
    },
);
