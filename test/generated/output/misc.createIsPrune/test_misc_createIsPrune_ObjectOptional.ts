import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_misc_isPrune_ObjectOptional = _test_misc_isPrune(
    "ObjectOptional",
)<ObjectOptional>(ObjectOptional)((input: any): input is ObjectOptional => {
    const is = (input: any): input is ObjectOptional => {
        const $io0 = (input: any): boolean =>
            (undefined === input.id || "string" === typeof input.id) &&
            (undefined === input.name || "string" === typeof input.name) &&
            (undefined === input.email || "string" === typeof input.email) &&
            (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)));
        return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
        );
    };
    const prune = (input: ObjectOptional): void => {
        const $po0 = (input: any): any => {
            for (const key of Object.keys(input)) {
                if (
                    "id" === key ||
                    "name" === key ||
                    "email" === key ||
                    "sequence" === key
                )
                    continue;
                delete input[key];
            }
        };
        if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
});
