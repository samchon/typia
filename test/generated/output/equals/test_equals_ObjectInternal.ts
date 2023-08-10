import typia from "../../../../src";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectInternal } from "../../../structures/ObjectInternal";

export const test_equals_ObjectInternal = _test_equals<ObjectInternal>(
    ObjectInternal,
)((input) =>
    ((input: any, _exceptionable: boolean = true): input is ObjectInternal => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                    if (["id", "name"].some((prop: any) => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return false;
                }));
        return "object" === typeof input && null !== input && $io0(input, true);
    })(input),
);
