import typia from "../../../../src";
import { TupleRestObject } from "../../../structures/TupleRestObject";
import { _test_prune } from "../../../internal/_test_prune";
export const test_createPrune_TupleRestObject = _test_prune("TupleRestObject", TupleRestObject.generate, (input: TupleRestObject): void => {
    const $io0 = (input: any): boolean => "string" === typeof input.value;
    const $pp0 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po0(elem);
    });
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input) && ("boolean" === typeof input[0] && "number" === typeof input[1] && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))))) {
        if (Array.isArray(input.slice(2)))
            $pp0(input.slice(2));
    }
});
