import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { ObjectOptional } from "../../../structures/ObjectOptional";
export const test_createIsPrune_ObjectOptional = _test_isPrune("ObjectOptional", ObjectOptional.generate, (input: any): input is ObjectOptional => { const is = (input: any): input is ObjectOptional => {
    const $io0 = (input: any): boolean => (undefined === input.id || "string" === typeof input.id) && (undefined === input.name || "string" === typeof input.name) && (undefined === input.email || "string" === typeof input.email) && (undefined === input.sequence || "number" === typeof input.sequence && Number.isFinite(input.sequence));
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input);
}; const prune = (input: ObjectOptional): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("id" === key || "name" === key || "email" === key || "sequence" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; }, ObjectOptional.SPOILERS);
