import typia from "../../../src";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ToJsonAtomicUnion = _test_stringify("ToJsonAtomicUnion", ToJsonAtomicUnion.generate, (input: ToJsonAtomicUnion): string => {
    const $string = (typia.createStringify as any).string;
    const $throws = (typia.createStringify as any).throws;
    return `[${input.map((elem: any) => (() => {
        if ("string" === typeof elem.toJSON())
            return $string(elem.toJSON());
        if ("number" === typeof elem.toJSON())
            return elem.toJSON();
        if ("boolean" === typeof elem.toJSON())
            return elem.toJSON();
        $throws({
            expected: "(boolean | number | string)",
            value: elem.toJSON()
        });
    })()).join(",")}]`;
});
