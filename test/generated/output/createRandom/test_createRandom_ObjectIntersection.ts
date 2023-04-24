import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_createRandom_ObjectIntersection = _test_random(
    "ObjectIntersection",
    (
        generator?: Partial<typia.IRandomGenerator>,
    ): typia.Primitive<ObjectIntersection> => {
        const $generator = (typia.createRandom as any).generator;
        const $ro0 = (
            _recursive: boolean = false,
            _depth: number = 0,
        ): any => ({
            email:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            name:
                (generator?.customs ?? $generator.customs)?.string?.([]) ??
                (generator?.string ?? $generator.string)(),
            vulnerable: (generator?.boolean ?? $generator.boolean)(),
        });
        return $ro0();
    },
    (input: any): typia.Primitive<ObjectIntersection> => {
        const $guard = (typia.createAssert as any).guard;
        const __is = (
            input: any,
        ): input is typia.Primitive<ObjectIntersection> => {
            return (
                "object" === typeof input &&
                null !== input &&
                "string" === typeof input.email &&
                "string" === typeof input.name &&
                "boolean" === typeof input.vulnerable
            );
        };
        if (false === __is(input))
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is typia.Primitive<ObjectIntersection> => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
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
                    ("boolean" === typeof input.vulnerable ||
                        $guard(_exceptionable, {
                            path: _path + ".vulnerable",
                            expected: "boolean",
                            value: input.vulnerable,
                        }));
                return (
                    (("object" === typeof input && null !== input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectIntersection>",
                            value: input,
                        })) &&
                    $ao0(input, _path + "", true)
                );
            })(input, "$input", true);
        return input;
    },
);
