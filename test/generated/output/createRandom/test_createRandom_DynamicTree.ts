import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_createRandom_DynamicTree = _test_random(
    "DynamicTree",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<DynamicTree> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            id:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            sequence:
                (generator?.customs ?? $generator.customs)?.number?.([]) ??
                (generator?.number ?? $generator.number)(0, 100),
            children: $ro1(_recursive, _recursive ? 1 + _depth : _depth),
        });
        const $ro1 = (_recursive: boolean = true, _depth: number = 0): any => {
            const output = {} as any;
            if (5 >= _depth) {
                (generator?.array ?? $generator.array)(
                    () =>
                        (output[
                            (
                                generator?.customs ?? $generator.customs
                            )?.string?.([]) ??
                                (generator?.string ?? $generator.string)()
                        ] = $ro0(true, _recursive ? 1 + _depth : _depth)),
                    (generator?.integer ?? $generator.integer)(0, 3),
                );
            }
            return output;
        };
        return $ro0();
    },
    (input: any): DynamicTree => {
        const $guard = (typia.createAssert as any).guard;
        const $join = (typia.createAssert as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is DynamicTree => {
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
                (("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)) ||
                    $guard(_exceptionable, {
                        path: _path + ".sequence",
                        expected: "number",
                        value: input.sequence,
                    })) &&
                (("object" === typeof input.children &&
                    null !== input.children &&
                    false === Array.isArray(input.children)) ||
                    $guard(_exceptionable, {
                        path: _path + ".children",
                        expected: "Resolve<Record<string, DynamicTree>>",
                        value: input.children,
                    })) &&
                $ao1(
                    input.children,
                    _path + ".children",
                    true && _exceptionable,
                );
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                false === _exceptionable ||
                Object.keys(input).every((key) => {
                    const value = input[key];
                    if (undefined === value) return true;
                    if (RegExp(/(.*)/).test(key))
                        return (
                            (("object" === typeof value && null !== value) ||
                                $guard(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "Resolve<DynamicTree>",
                                    value: value,
                                })) &&
                            $ao0(
                                value,
                                _path + $join(key),
                                true && _exceptionable,
                            )
                        );
                    return true;
                });
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<DynamicTree>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
