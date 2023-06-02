import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ClassClosure } from "../../../structures/ClassClosure";

export const test_equals_ClassClosure = _test_equals(
    "ClassClosure",
    ClassClosure.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is ClassClosure.Something => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.id &&
                "something" === input.type &&
                "function" === typeof input.closure &&
                (3 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (
                            ["id", "type", "closure"].some(
                                (prop: any) => key === prop,
                            )
                        )
                            return true;
                        const value: any = input[key];
                        if (undefined === value) return true;
                        return false;
                    }));
            return (
                "object" === typeof input && null !== input && $io0(input, true)
            );
        })(input),
);
