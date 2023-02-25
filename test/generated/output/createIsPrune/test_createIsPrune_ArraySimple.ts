import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_isPrune } from "../internal/_test_isPrune";
export const test_createIsPrune_ArraySimple = _test_isPrune("ArraySimple", ArraySimple.generate, (input: any): input is ArraySimple => { const is = (input: any): input is ArraySimple => {
    const $io0 = (input: any) => "string" === typeof input.name && "string" === typeof input.email && (Array.isArray(input.hobbies) && input.hobbies.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any) => "string" === typeof input.name && "string" === typeof input.body && "number" === typeof input.rank;
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const prune = (input: ArraySimple): void => {
    const $io1 = (input: any) => "string" === typeof input.name && "string" === typeof input.body && "number" === typeof input.rank;
    const $po0 = (input: any) => {
        if (Array.isArray(input.hobbies))
            input.hobbies.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po1(elem);
            });
        for (const key of Object.keys(input)) {
            if ("name" === key || "email" === key || "hobbies" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("name" === key || "body" === key || "rank" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem)
                $po0(elem);
        });
}; if (!is(input))
    return false; prune(input); return true; }, ArraySimple.SPOILERS);
