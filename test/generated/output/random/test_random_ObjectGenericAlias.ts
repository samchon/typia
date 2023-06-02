import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_random_ObjectGenericAlias = _test_random(
    "ObjectGenericAlias",
    () =>
        ((
            generator?: Partial<typia.IRandomGenerator>,
        ): typia.Primitive<ObjectGenericAlias> => {
            const $generator: any = (typia.random as any).generator;
            const $ro0: any = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                value:
                    (generator?.customs ?? $generator.customs)?.string?.([]) ??
                    (generator?.string ?? $generator.string)(),
            });
            return $ro0();
        })(),
    (input: any): typia.Primitive<ObjectGenericAlias> => {
        const __is: any = (
            input: any,
        ): input is typia.Primitive<ObjectGenericAlias> => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.value
            );
        };
        const $guard: any = (typia.createAssert as any).guard;
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectGenericAlias> => {
                const $ao0: any = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "string" === typeof input.value ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "string",
                        value: input.value,
                    });
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ObjectGenericAlias.Alias",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);
