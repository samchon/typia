import typia from "../../../src";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_validate } from "../internal/_test_validate";
export const test_validate_ObjectNullable = _test_validate("ObjectNullable", ObjectNullable.generate, (input) => ((input: any): typia.IValidation<ObjectNullable> => {
    const errors = [] as any[];
    const $report = (typia.validate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ObjectNullable => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), ("object" === typeof input.manufacturer && null !== input.manufacturer || $report(_exceptionable, {
                path: _path + ".manufacturer",
                expected: "Resolve<ObjectNullable.IManufacturer>",
                value: input.manufacturer
            })) && $vo1(input.manufacturer, _path + ".manufacturer", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".manufacturer",
                expected: "Resolve<ObjectNullable.IManufacturer>",
                value: input.manufacturer
            }), ("object" === typeof input.brand && null !== input.brand || $report(_exceptionable, {
                path: _path + ".brand",
                expected: "Resolve<ObjectNullable.IBrand>",
                value: input.brand
            })) && $vo2(input.brand, _path + ".brand", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".brand",
                expected: "Resolve<ObjectNullable.IBrand>",
                value: input.brand
            }), ("object" === typeof input.similar && null !== input.similar || $report(_exceptionable, {
                path: _path + ".similar",
                expected: "(Resolve<ObjectNullable.IBrand> | Resolve<ObjectNullable.IManufacturer>)",
                value: input.similar
            })) && $vu0(input.similar, _path + ".similar", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".similar",
                expected: "(Resolve<ObjectNullable.IBrand> | Resolve<ObjectNullable.IManufacturer>)",
                value: input.similar
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["manufacturer" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"manufacturer\"",
                value: input.type
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["brand" === input.type || $report(_exceptionable, {
                path: _path + ".type",
                expected: "\"brand\"",
                value: input.type
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            })].every((flag: boolean) => flag);
        const $vu0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("manufacturer" === input.type)
                return $vo1(input, _path, true && _exceptionable);
            if ("brand" === input.type)
                return $vo2(input, _path, true && _exceptionable);
            return $report(_exceptionable, {
                path: _path,
                expected: "(ObjectNullable.IManufacturer | ObjectNullable.IBrand)",
                value: input
            });
        })();
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
            value: input
        })) && ((input.length === 3 || $report(true, {
            path: _path + "",
            expected: "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
            value: input
        })) && [
            ("object" === typeof input[0] && null !== input[0] || $report(true, {
                path: _path + "[0]",
                expected: "Resolve<ObjectNullable.IProduct>",
                value: input[0]
            })) && $vo0(input[0], _path + "[0]", true) || $report(true, {
                path: _path + "[0]",
                expected: "Resolve<ObjectNullable.IProduct>",
                value: input[0]
            }),
            ("object" === typeof input[1] && null !== input[1] || $report(true, {
                path: _path + "[1]",
                expected: "Resolve<ObjectNullable.IProduct>",
                value: input[1]
            })) && $vo0(input[1], _path + "[1]", true) || $report(true, {
                path: _path + "[1]",
                expected: "Resolve<ObjectNullable.IProduct>",
                value: input[1]
            }),
            ("object" === typeof input[2] && null !== input[2] || $report(true, {
                path: _path + "[2]",
                expected: "Resolve<ObjectNullable.IProduct>",
                value: input[2]
            })) && $vo0(input[2], _path + "[2]", true) || $report(true, {
                path: _path + "[2]",
                expected: "Resolve<ObjectNullable.IProduct>",
                value: input[2]
            })
        ].every((flag: boolean) => flag)) || $report(true, {
            path: _path + "",
            expected: "[Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>, Resolve<ObjectNullable.IProduct>]",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ObjectNullable>;
})(input), ObjectNullable.SPOILERS);
