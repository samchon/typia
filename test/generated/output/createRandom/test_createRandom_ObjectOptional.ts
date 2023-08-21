import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_random_ObjectOptional = _test_random(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ObjectOptional> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            name: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            email: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            sequence: $pick([
                () => undefined,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
        });
        return $ro0();
    },
    assert: (input: any): ObjectOptional => {
        const __is = (input: any): input is ObjectOptional => {
            const $io0 = (input: any): boolean =>
                (undefined === input.id || "string" === typeof input.id) &&
                (undefined === input.name || "string" === typeof input.name) &&
                (undefined === input.email ||
                    "string" === typeof input.email) &&
                (undefined === input.sequence ||
                    ("number" === typeof input.sequence &&
                        Number.isFinite(input.sequence)));
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
            ): input is ObjectOptional => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (undefined === input.id ||
                        "string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "(string | undefined)",
                            value: input.id,
                        })) &&
                    (undefined === input.name ||
                        "string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "(string | undefined)",
                            value: input.name,
                        })) &&
                    (undefined === input.email ||
                        "string" === typeof input.email ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "(string | undefined)",
                            value: input.email,
                        })) &&
                    (undefined === input.sequence ||
                        ("number" === typeof input.sequence &&
                            Number.isFinite(input.sequence)) ||
                        $guard(_exceptionable, {
                            path: _path + ".sequence",
                            expected: "(number | undefined)",
                            value: input.sequence,
                        }));
                return (
                    ((("object" === typeof input &&
                        null !== input &&
                        false === Array.isArray(input)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectOptional",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectOptional",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
