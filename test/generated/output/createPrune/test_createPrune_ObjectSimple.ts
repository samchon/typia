import typia from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_prune } from "../internal/_test_prune";
export const test_createPrune_ObjectSimple = _test_prune("ObjectSimple", ObjectSimple.generate, (input: IBox3D): void => {
    const $io1 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "number" === typeof input.z;
    const $po0 = (input: any) => {
        if ("object" === typeof input.scale && null !== input.scale)
            $po1(input.scale);
        if ("object" === typeof input.position && null !== input.position)
            $po1(input.position);
        if ("object" === typeof input.rotate && null !== input.rotate)
            $po1(input.rotate);
        if ("object" === typeof input.pivot && null !== input.pivot)
            $po1(input.pivot);
        for (const key of Object.keys(input)) {
            if ("scale" === key || "position" === key || "rotate" === key || "pivot" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("x" === key || "y" === key || "z" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
});
