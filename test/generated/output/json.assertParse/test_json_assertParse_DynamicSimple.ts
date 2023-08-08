import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_json_assertParse_DynamicSimple = _test_json_assertParse(
    "DynamicSimple",
    DynamicSimple.generate,
    (input) =>
        ((input: string): typia.Primitive<DynamicSimple> => {
            const assert = (input: any): DynamicSimple => {
                const __is = (input: any): input is DynamicSimple => {
                    const $join = (typia.json.assertParse as any).join;
                    const $io0 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    "number" === typeof value &&
                                    Number.isFinite(value)
                                );
                            return true;
                        });
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input) &&
                        $io0(input)
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is DynamicSimple => {
                        const $guard = (typia.json.assertParse as any).guard;
                        const $join = (typia.json.assertParse as any).join;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/(.*)/).test(key))
                                    return (
                                        ("number" === typeof value &&
                                            Number.isFinite(value)) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "number",
                                            value: value,
                                        })
                                    );
                                return true;
                            });
                        return (
                            ((("object" === typeof input &&
                                null !== input &&
                                false === Array.isArray(input)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "DynamicSimple",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicSimple",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            input = JSON.parse(input);
            return assert(input) as any;
        })(input),
    DynamicSimple.SPOILERS,
);
