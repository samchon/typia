import typia from "../../../../src";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_isPrune } from "../../../internal/_test_isPrune";
export const test_isPrune_ArraySimple = _test_isPrune("ArraySimple", ArraySimple.generate, (input) => ((input: any): input is Array<ArraySimple.IPerson> => { const is = (input: any): input is Array<ArraySimple.IPerson> => {
    const $io0 = (input: any): boolean => "string" === typeof input.name && "string" === typeof input.email && (Array.isArray(input.hobbies) && input.hobbies.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem)));
    const $io1 = (input: any): boolean => "string" === typeof input.name && "string" === typeof input.body && ("number" === typeof input.rank && Number.isFinite(input.rank));
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
}; const prune = (input: Array<ArraySimple.IPerson>): void => {
    const $io1 = (input: any): boolean => "string" === typeof input.name && "string" === typeof input.body && "number" === typeof input.rank;
    const $pp0 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po0(elem);
    });
    const $pp1 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po1(elem);
    });
    const $po0 = (input: any): any => {
        if (Array.isArray(input.hobbies))
            $pp1(input.hobbies);
        for (const key of Object.keys(input)) {
            if ("name" === key || "email" === key || "hobbies" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("name" === key || "body" === key || "rank" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        $pp0(input);
}; if (!is(input))
    return false; prune(input); return true; })(input), ArraySimple.SPOILERS);
