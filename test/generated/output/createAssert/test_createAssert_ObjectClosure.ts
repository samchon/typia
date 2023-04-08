import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_createAssert_ObjectClosure = _test_assert(
    "ObjectClosure",
    ObjectClosure.generate,
    (input: any): ObjectClosure => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (input: any): input is ObjectClosure => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "function" === typeof input.open;
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectClosure => {
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
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectClosure.IRecord>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
    ObjectClosure.SPOILERS,
);
