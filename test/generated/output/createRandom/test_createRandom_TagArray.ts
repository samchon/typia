import typia from "../../../../src";
import { TagArray } from "../../../structures/TagArray";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TagArray = _test_random(
    "TagArray",
    (
        generator: Partial<typia.IRandomGenerator> = (typia.createRandom as any)
            .generator,
    ): typia.Primitive<TagArray> => {
        const $generator = (typia.createRandom as any).generator;
        const $pick = (typia.createRandom as any).pick;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            items: (generator.array ?? $generator.array)(
                () => (generator.uuid ?? $generator.uuid)(),
                3,
            ),
            minItems: (generator.array ?? $generator.array)(
                () => (generator.number ?? $generator.number)(3, 13),
                (generator.integer ?? $generator.integer)(3, 6),
            ),
            maxItems: (generator.array ?? $generator.array)(
                () =>
                    $pick([
                        () =>
                            (generator.string ?? $generator.string)(
                                (generator.integer ?? $generator.integer)(5, 7),
                            ),
                        () => (generator.number ?? $generator.number)(-3, 7),
                    ])(),
                (generator.integer ?? $generator.integer)(0, 7),
            ),
            both: (generator.array ?? $generator.array)(
                () => (generator.uuid ?? $generator.uuid)(),
                (generator.integer ?? $generator.integer)(3, 7),
            ),
        });
        return (generator.array ?? $generator.array)(() => $ro0());
    },
    (input: any): TagArray => {
        const $guard = (typia.createAssert as any).guard;
        const $is_uuid = (typia.createAssert as any).is_uuid;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagArray => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ((Array.isArray(input.items) && 3 === input.items.length) ||
                    $guard(_exceptionable, {
                        path: _path + ".items",
                        expected: "Array<string>",
                        value: input.items,
                    })) &&
                input.items.every(
                    (elem: any, _index2: number) =>
                        ("string" === typeof elem && true === $is_uuid(elem)) ||
                        $guard(_exceptionable, {
                            path: _path + ".items[" + _index2 + "]",
                            expected: "string",
                            value: elem,
                        }),
                ) &&
                ((Array.isArray(input.minItems) &&
                    3 <= input.minItems.length) ||
                    $guard(_exceptionable, {
                        path: _path + ".minItems",
                        expected: "Array<number>",
                        value: input.minItems,
                    })) &&
                input.minItems.every(
                    (elem: any, _index3: number) =>
                        ("number" === typeof elem &&
                            Number.isFinite(elem) &&
                            3 <= elem) ||
                        $guard(_exceptionable, {
                            path: _path + ".minItems[" + _index3 + "]",
                            expected: "number",
                            value: elem,
                        }),
                ) &&
                ((Array.isArray(input.maxItems) &&
                    7 >= input.maxItems.length) ||
                    $guard(_exceptionable, {
                        path: _path + ".maxItems",
                        expected: "Array<(number | string)>",
                        value: input.maxItems,
                    })) &&
                input.maxItems.every(
                    (elem: any, _index4: number) =>
                        ("string" === typeof elem && 7 >= elem.length) ||
                        ("number" === typeof elem &&
                            Number.isFinite(elem) &&
                            7 >= elem) ||
                        $guard(_exceptionable, {
                            path: _path + ".maxItems[" + _index4 + "]",
                            expected: "(number | string)",
                            value: elem,
                        }),
                ) &&
                ((Array.isArray(input.both) &&
                    3 <= input.both.length &&
                    7 >= input.both.length) ||
                    $guard(_exceptionable, {
                        path: _path + ".both",
                        expected: "Array<string>",
                        value: input.both,
                    })) &&
                input.both.every(
                    (elem: any, _index5: number) =>
                        ("string" === typeof elem && true === $is_uuid(elem)) ||
                        $guard(_exceptionable, {
                            path: _path + ".both[" + _index5 + "]",
                            expected: "string",
                            value: elem,
                        }),
                );
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Array<Resolve<TagArray.Type>>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected: "Resolve<TagArray.Type>",
                                value: elem,
                            })) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
