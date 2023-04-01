import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_createRandom_TagAtomicUnion = _test_random(
    "TagAtomicUnion",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<TagAtomicUnion> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            value: $pick([
                () =>
                    (generator.string ?? $generator.string)(
                        (generator.integer ?? $generator.integer)(3, 7),
                    ),
                () => (generator.number ?? $generator.number)(3, 13),
            ])(),
        });
        return (generator.array ?? $generator.array)(() => $ro0());
    },
    (input: any): TagAtomicUnion => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagAtomicUnion => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.value &&
                    (3 <= input.value.length ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "string (@minLength 3)",
                            value: input.value,
                        })) &&
                    (7 >= input.value.length ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "string (@maxLength 7)",
                            value: input.value,
                        }))) ||
                ("number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    (3 <= input.value ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number (@minimum 3)",
                            value: input.value,
                        }))) ||
                $guard(_exceptionable, {
                    path: _path + ".value",
                    expected: "(number | string)",
                    value: input.value,
                });
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagAtomicUnion.Type>>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "Resolve<TagAtomicUnion.Type>",
                                value: elem,
                            })) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
