import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_createRandom_ObjectAlias = _test_random(
    "ObjectAlias",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ObjectAlias> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            ])(),
            email:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            name:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            sex: $pick([
                () => null,
                () => 1,
                () => 2,
                () => "male",
                () => "female",
            ])(),
            age: $pick([
                () => null,
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
            ])(),
            dead: $pick([
                () => null,
                () => (generator?.boolean ?? $generator.boolean)(),
            ])(),
        });
        return (generator?.array ?? $generator.array)(() => $ro0());
    },
    (input: any): ObjectAlias => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (input: any): input is ObjectAlias => {
            const $io0 = (input: any): boolean =>
                (null === input.id || "string" === typeof input.id) &&
                "string" === typeof input.email &&
                "string" === typeof input.name &&
                (null === input.sex ||
                    1 === input.sex ||
                    2 === input.sex ||
                    "male" === input.sex ||
                    "female" === input.sex) &&
                (null === input.age ||
                    ("number" === typeof input.age &&
                        Number.isFinite(input.age))) &&
                (null === input.dead || "boolean" === typeof input.dead);
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                )
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectAlias => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (null === input.id ||
                        "string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "(null | string)",
                            value: input.id,
                        })) &&
                    ("string" === typeof input.email ||
                        $guard(_exceptionable, {
                            path: _path + ".email",
                            expected: "string",
                            value: input.email,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (null === input.sex ||
                        1 === input.sex ||
                        2 === input.sex ||
                        "male" === input.sex ||
                        "female" === input.sex ||
                        $guard(_exceptionable, {
                            path: _path + ".sex",
                            expected: '("female" | "male" | 1 | 2 | null)',
                            value: input.sex,
                        })) &&
                    (null === input.age ||
                        ("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "(null | number)",
                            value: input.age,
                        })) &&
                    (null === input.dead ||
                        "boolean" === typeof input.dead ||
                        $guard(_exceptionable, {
                            path: _path + ".dead",
                            expected: "(boolean | null)",
                            value: input.dead,
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<Resolve<ObjectAlias.IMember>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "Resolve<ObjectAlias.IMember>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
