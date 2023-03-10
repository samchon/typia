import typia from "../../../../src";
import { _test_validate } from "../../../internal/_test_validate";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_validate_ClassClosure = _test_validate(
    "ClassClosure",
    ClassClosure.generate,
    (input) =>
        ((input: any): typia.IValidation<ClassClosure.Something> => {
            const errors = [] as any[];
            const $report = (typia.validate as any).report(errors);
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
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ClassClosure.Something",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "ClassClosure.Something",
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
        })(input),
    ClassClosure.SPOILERS,
);
