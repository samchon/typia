import typia from "../../../src";
import { ISomeOutputDto } from "./structures/ISomeOutputDto";

export const isSomeOutputDto = (input: any): ISomeOutputDto => {
    const $guard = (typia.createAssert as any).guard;
    const $is_uuid = (typia.createAssert as any).is_uuid;
    const __is = (input: any): input is ISomeOutputDto => {
        const $is_uuid = (typia.createAssert as any).is_uuid;
        return (
            "object" === typeof input &&
            null !== input &&
            "string" === typeof input.id &&
            $is_uuid(input.id) &&
            "string" === typeof input.name &&
            3 <= input.name.length &&
            "number" === typeof input.age &&
            0 <= input.age &&
            100 >= input.age
        );
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ISomeOutputDto => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("string" === typeof input.id &&
                    ($is_uuid(input.id) ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string (@format uuid)",
                            value: input.id,
                        }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "string",
                        value: input.id,
                    })) &&
                (("string" === typeof input.name &&
                    (3 <= input.name.length ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string (@minLength 3)",
                            value: input.name,
                        }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                (("number" === typeof input.age &&
                    (0 <= input.age ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "number (@minimum 0)",
                            value: input.age,
                        })) &&
                    (100 >= input.age ||
                        $guard(_exceptionable, {
                            path: _path + ".age",
                            expected: "number (@maximum 100)",
                            value: input.age,
                        }))) ||
                    $guard(_exceptionable, {
                        path: _path + ".age",
                        expected: "number",
                        value: input.age,
                    }));
            return (
                (("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "ISomeOutputDto",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
    return input;
};
