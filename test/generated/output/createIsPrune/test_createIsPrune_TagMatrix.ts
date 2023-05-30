import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagMatrix } from "../../../structures/TagMatrix";
export const test_createIsPrune_TagMatrix = _test_isPrune("TagMatrix", TagMatrix.generate, (input: any): input is TagMatrix => { const is = (input: any): input is TagMatrix => {
    const $is_uuid = (typia.createIsPrune as any).is_uuid;
    const $io0 = (input: any): boolean => Array.isArray(input.matrix) && 3 === input.matrix.length && input.matrix.every((elem: any) => Array.isArray(elem) && 3 === elem.length && elem.every((elem: any) => "string" === typeof elem && $is_uuid(elem)));
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: TagMatrix): void => {
    const $is_uuid = (typia.createIsPrune as any).is_uuid;
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("matrix" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; }, TagMatrix.SPOILERS);
