import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_createAssert_ClassClosure = _test_assert(
    "ClassClosure",
    ClassClosure.generate,
    (input: any): ClassClosure.Something => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ClassClosure.Something => {
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
                ("something" === input.type ||
                    $guard(_exceptionable, {
                        path: _path + ".type",
                        expected: '"something"',
                        value: input.type,
                    })) &&
                ("function" === typeof input.closure ||
                    $guard(_exceptionable, {
                        path: _path + ".closure",
                        expected: "unknown",
                        value: input.closure,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<ClassClosure.Something>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
    ClassClosure.SPOILERS,
);
