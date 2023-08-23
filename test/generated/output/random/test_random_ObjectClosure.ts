import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_random_ObjectClosure = _test_random(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)({
    random: () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Resolved<ObjectClosure> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                id:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
                open: undefined,
            });
            return $ro0();
        })(),
    assert: (input: any): ObjectClosure => {
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
                const $guard = (typia.createAssert as any).guard;
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
    },
});
