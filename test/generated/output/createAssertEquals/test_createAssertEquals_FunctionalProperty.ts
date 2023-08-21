import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalProperty } from "../../../structures/FunctionalProperty";

export const test_assertEquals_FunctionalProperty = _test_assertEquals(
    "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)((input: any): FunctionalProperty => {
    const __is = (
        input: any,
        _exceptionable: boolean = true,
    ): input is FunctionalProperty => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.name &&
            "function" === typeof input.closure &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["name", "closure"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is FunctionalProperty => {
            const $guard = (typia.createAssertEquals as any).guard;
            const $join = (typia.createAssertEquals as any).join;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                ("function" === typeof input.closure ||
                    $guard(_exceptionable, {
                        path: _path + ".closure",
                        expected: "unknown",
                        value: input.closure,
                    })) &&
                (2 === Object.keys(input).length ||
                    false === _exceptionable ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["name", "closure"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value = input[key];
                        if (undefined === value) return true;
                        return $guard(_exceptionable, {
                            path: _path + $join(key),
                            expected: "undefined",
                            value: value,
                        });
                    }));
            return (
                ((("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "FunctionalProperty",
                        value: input,
                    })) &&
                    $ao0(input, _path + "", true)) ||
                $guard(true, {
                    path: _path + "",
                    expected: "FunctionalProperty",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
