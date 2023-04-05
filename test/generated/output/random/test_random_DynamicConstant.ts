import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_random_DynamicConstant = _test_random(
    "DynamicConstant",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<DynamicConstant> => {
            const $generator = (typia.random as any).generator;
            const $ro0 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                a:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                b:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                c:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                d:
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            });
            return $ro0();
        })(),
    (input: any): DynamicConstant => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicConstant => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.a && Number.isFinite(input.a)) ||
                    $guard(_exceptionable, {
                        path: _path + ".a",
                        expected: "number",
                        value: input.a,
                    })) &&
                (("number" === typeof input.b && Number.isFinite(input.b)) ||
                    $guard(_exceptionable, {
                        path: _path + ".b",
                        expected: "number",
                        value: input.b,
                    })) &&
                (("number" === typeof input.c && Number.isFinite(input.c)) ||
                    $guard(_exceptionable, {
                        path: _path + ".c",
                        expected: "number",
                        value: input.c,
                    })) &&
                (("number" === typeof input.d && Number.isFinite(input.d)) ||
                    $guard(_exceptionable, {
                        path: _path + ".d",
                        expected: "number",
                        value: input.d,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<DynamicConstant>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
