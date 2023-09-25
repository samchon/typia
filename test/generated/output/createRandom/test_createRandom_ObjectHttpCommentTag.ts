import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_createRandom_ObjectHttpCommentTag = _test_random(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)({
    random: (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Resolved<ObjectHttpCommentTag> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            int:
                (generator?.customs ?? $generator.customs)?.number?.([
                    {
                        name: 'Type<"int32">',
                        kind: "type",
                        value: "int32",
                    },
                ]) ?? (generator?.integer ?? $generator.integer)(0, 100),
            uint64:
                (generator?.customs ?? $generator.customs)?.bigint?.([
                    {
                        name: 'Type<"uint64">',
                        kind: "type",
                        value: "uint64",
                    },
                ]) ??
                (generator?.bigint ?? $generator.bigint)(BigInt(0), BigInt(10)),
            uuid:
                (generator?.customs ?? $generator.customs)?.string?.([
                    {
                        name: 'Format<"uuid">',
                        kind: "format",
                        value: "uuid",
                    },
                ]) ?? (generator?.uuid ?? $generator.uuid)(),
            items: (generator?.array ?? $generator.array)(
                () =>
                    (generator?.customs ?? $generator.customs)?.number?.([]) ??
                    (generator?.number ?? $generator.number)(0, 100),
                (generator?.integer ?? $generator.integer)(10, 100),
            ),
        });
        return $ro0();
    },
    assert: (input: any): ObjectHttpCommentTag => {
        const __is = (input: any): input is ObjectHttpCommentTag => {
            const $io0 = (input: any): boolean =>
                "number" === typeof input.int &&
                Math.floor(input.int) === input.int &&
                -2147483648 <= input.int &&
                input.int <= 2147483647 &&
                "bigint" === typeof input.uint64 &&
                BigInt(0) <= input.uint64 &&
                "string" === typeof input.uuid &&
                /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                    input.uuid,
                ) &&
                Array.isArray(input.items) &&
                10 <= input.items.length &&
                input.items.length <= 100 &&
                input.items.every(
                    (elem: any) =>
                        "number" === typeof elem && Number.isFinite(elem),
                );
            return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectHttpCommentTag => {
                const $guard = (typia.createAssert as any).guard;
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.int &&
                        ((Math.floor(input.int) === input.int &&
                            -2147483648 <= input.int &&
                            input.int <= 2147483647) ||
                            $guard(_exceptionable, {
                                path: _path + ".int",
                                expected: 'number & Type<"int32">',
                                value: input.int,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".int",
                            expected: '(number & Type<"int32">)',
                            value: input.int,
                        })) &&
                    (("bigint" === typeof input.uint64 &&
                        (BigInt(0) <= input.uint64 ||
                            $guard(_exceptionable, {
                                path: _path + ".uint64",
                                expected: 'bigint & Type<"uint64">',
                                value: input.uint64,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uint64",
                            expected: '(bigint & Type<"uint64">)',
                            value: input.uint64,
                        })) &&
                    (("string" === typeof input.uuid &&
                        (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
                            input.uuid,
                        ) ||
                            $guard(_exceptionable, {
                                path: _path + ".uuid",
                                expected: 'string & Format<"uuid">',
                                value: input.uuid,
                            }))) ||
                        $guard(_exceptionable, {
                            path: _path + ".uuid",
                            expected: '(string & Format<"uuid">)',
                            value: input.uuid,
                        })) &&
                    (((Array.isArray(input.items) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected:
                                "(Array<number> & MinItems<10> & MaxItems<100>)",
                            value: input.items,
                        })) &&
                        (10 <= input.items.length ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array<> & MinItems<10>",
                                value: input.items,
                            })) &&
                        (input.items.length <= 100 ||
                            $guard(_exceptionable, {
                                path: _path + ".items",
                                expected: "Array<> & MaxItems<100>",
                                value: input.items,
                            })) &&
                        input.items.every(
                            (elem: any, _index1: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".items[" + _index1 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        )) ||
                        $guard(_exceptionable, {
                            path: _path + ".items",
                            expected:
                                "(Array<number> & MinItems<10> & MaxItems<100>)",
                            value: input.items,
                        }));
                return (
                    ((("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectHttpCommentTag",
                            value: input,
                        })) &&
                        $ao0(input, _path + "", true)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ObjectHttpCommentTag",
                        value: input,
                    })
                );
            })(input, "$input", true);
        return input;
    },
});
