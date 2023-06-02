import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectGenericAlias } from "../../../structures/ObjectGenericAlias";

export const test_equals_ObjectGenericAlias = _test_equals(
    "ObjectGenericAlias",
    ObjectGenericAlias.generate,
    (input) =>
        ((
            input: any,
            _exceptionable: boolean = true,
        ): input is ObjectGenericAlias.ISomething<string> => {
            const $io0: any = (
                input: any,
                _exceptionable: boolean = true,
            ): boolean =>
                "string" === typeof input.value &&
                (1 === Object.keys(input).length ||
                    Object.keys(input).every((key: any) => {
                        if (["value"].some((prop: any) => key === prop))
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
