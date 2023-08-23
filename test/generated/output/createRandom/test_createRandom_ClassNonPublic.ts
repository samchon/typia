import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_random_ClassNonPublic = _test_random(
    "ClassNonPublic",
)<ClassNonPublic>(ClassNonPublic)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ClassNonPublic> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            implicit:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            shown:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        return $ro0();
    },
    assert: (input: any): ClassNonPublic => {
        const __is = (input: any): input is ClassNonPublic => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).implicit &&
                "string" === typeof (input as any).shown
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ClassNonPublic => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.implicit ||
                        $guard(_exceptionable, {
                            path: _path + ".implicit",
                            expected: "string",
                            value: input.implicit,
                        })) &&
                    ("string" === typeof input.shown ||
                        $guard(_exceptionable, {
                            path: _path + ".shown",
                            expected: "string",
                            value: input.shown,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ClassNonPublic.Accessor",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ClassNonPublic.Accessor",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
