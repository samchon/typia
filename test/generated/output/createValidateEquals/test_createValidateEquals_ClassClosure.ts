import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_createValidateEquals_ClassClosure = _test_validateEquals(
    "ClassClosure",
    ClassClosure.generate,
    (input: any): typia.IValidation<ClassClosure.Something> => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        const $join = (typia.createValidateEquals as any).join;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ClassClosure.Something => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "string" === typeof input.id ||
                        $report(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        }),
                    "something" === input.type ||
                        $report(_exceptionable, {
                            path: _path + ".type",
                            expected: '"something"',
                            value: input.type,
                        }),
                    "function" === typeof input.closure ||
                        $report(_exceptionable, {
                            path: _path + ".closure",
                            expected: "unknown",
                            value: input.closure,
                        }),
                    3 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input)
                            .map((key) => {
                                if (
                                    ["id", "type", "closure"].some(
                                        (prop) => key === prop,
                                    )
                                )
                                    return true;
                                const value = input[key];
                                if (undefined === value) return true;
                                return $report(_exceptionable, {
                                    path: _path + $join(key),
                                    expected: "undefined",
                                    value: value,
                                });
                            })
                            .every((flag: boolean) => flag),
                ].every((flag: boolean) => flag);
            return (
                ((("object" === typeof input && null !== input) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<ClassClosure.Something>",
                        value: input,
                    })) &&
                    $vo0(input, _path + "", true)) ||
                $report(true, {
                    path: _path + "",
                    expected: "Resolve<ClassClosure.Something>",
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
