import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_createRandom_ObjectJsonTag = _test_random(
    "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
    random: (
        generator: Partial<typia.IRandomGenerator> = (ObjectJsonTag as any)
            .RANDOM,
    ): typia.Resolved<ObjectJsonTag> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            vulnerable:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            description:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            title:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            complicate_title:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
        });
        return $ro0();
    },
    assert: (input: any): ObjectJsonTag => {
        const __is = (input: any): input is ObjectJsonTag => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof (input as any).vulnerable &&
                "string" === typeof (input as any).description &&
                "string" === typeof (input as any).title &&
                "string" === typeof (input as any).complicate_title
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectJsonTag => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.vulnerable ||
                        $guard(_exceptionable, {
                            path: _path + ".vulnerable",
                            expected: "string",
                            value: input.vulnerable,
                        })) &&
                    ("string" === typeof input.description ||
                        $guard(_exceptionable, {
                            path: _path + ".description",
                            expected: "string",
                            value: input.description,
                        })) &&
                    ("string" === typeof input.title ||
                        $guard(_exceptionable, {
                            path: _path + ".title",
                            expected: "string",
                            value: input.title,
                        })) &&
                    ("string" === typeof input.complicate_title ||
                        $guard(_exceptionable, {
                            path: _path + ".complicate_title",
                            expected: "string",
                            value: input.complicate_title,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectJsonTag",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectJsonTag",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
