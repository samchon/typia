import typia from "../../../../src";
import { _test_isPrune } from "../../../internal/_test_isPrune";
import { TagTuple } from "../../../structures/TagTuple";
export const test_createIsPrune_TagTuple = _test_isPrune("TagTuple", TagTuple.generate, (input: any): input is TagTuple => { const is = (input: any): input is TagTuple => {
    const $io0 = (input: any): boolean => Array.isArray(input.tuple) && (input.tuple.length === 4 && ("string" === typeof input.tuple[0] && 3 <= input.tuple[0].length && 7 >= input.tuple[0].length) && ("number" === typeof input.tuple[1] && 3 <= input.tuple[1] && 7 >= input.tuple[1]) && (Array.isArray(input.tuple[2]) && 3 <= input.tuple[2].length && 7 >= input.tuple[2].length && input.tuple[2].every((elem: any) => "string" === typeof elem && 3 <= elem.length && 7 >= elem.length)) && (Array.isArray(input.tuple[3]) && 3 <= input.tuple[3].length && 7 >= input.tuple[3].length && input.tuple[3].every((elem: any) => "number" === typeof elem && 3 <= elem && 7 >= elem)));
    return "object" === typeof input && null !== input && $io0(input);
}; const prune = (input: TagTuple): void => {
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("tuple" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; if (!is(input))
    return false; prune(input); return true; }, TagTuple.SPOILERS);
