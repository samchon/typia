import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_misc_assertPrune_ObjectClosure = _test_misc_assertPrune(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
    ((input: any): ObjectClosure => {
        const assert = (input: any): ObjectClosure => {
            const __is = (input: any): input is ObjectClosure => {
                const $io0 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "function" === typeof input.open;
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ObjectClosure => {
                    const $guard = (typia.misc.assertPrune as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("function" === typeof input.open ||
                            $guard(_exceptionable, {
                                path: _path + ".open",
                                expected: "unknown",
                                value: input.open,
                            }));
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ObjectClosure.IRecord",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectClosure.IRecord",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        const prune = (input: ObjectClosure): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("id" === key || "open" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
    })(input),
);
