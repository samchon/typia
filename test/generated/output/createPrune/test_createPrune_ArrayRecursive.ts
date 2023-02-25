import typia from "../../../src";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_prune } from "../internal/_test_prune";
export const test_createPrune_ArrayRecursive = _test_prune("ArrayRecursive", ArrayRecursive.generate, (input: ICategory): void => {
    const $io0 = (input: any) => Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && "number" === typeof input.id && "string" === typeof input.code && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $po0 = (input: any) => {
        if (Array.isArray(input.children))
            input.children.forEach((elem: any) => {
                if ("object" === typeof elem && null !== elem)
                    $po0(elem);
            });
        if ("object" === typeof input.created_at && null !== input.created_at)
            $po1(input.created_at);
        for (const key of Object.keys(input)) {
            if ("children" === key || "id" === key || "code" === key || "sequence" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("time" === key || "zone" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
