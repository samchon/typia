import typia from "../../../../src";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectClosure } from "../../../structures/ObjectClosure";

export const test_misc_isPrune_ObjectClosure = _test_misc_isPrune(
    "ObjectClosure",
)<ObjectClosure>(ObjectClosure)((input) =>
    ((input: any): input is ObjectClosure => {
        const is = (input: any): input is ObjectClosure => {
            const $io0 = (input: any): boolean =>
                "string" === typeof input.id &&
                "function" === typeof input.open;
            return "object" === typeof input && null !== input && $io0(input);
        };
        const prune = (input: ObjectClosure): void => {
            const $po0 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("id" === key || "open" === key) continue;
                    delete input[key];
                }
            };
            if ("object" === typeof input && null !== input) $po0(input);
        };
        if (!is(input)) return false;
        prune(input);
        return true;
    })(input),
);
