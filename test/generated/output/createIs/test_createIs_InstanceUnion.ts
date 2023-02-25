import typia from "../../../src";
import { InstanceUnion } from "../../structures/InstanceUnion";
import { _test_is } from "../internal/_test_is";
export const test_createIs_InstanceUnion = _test_is("InstanceUnion", InstanceUnion.generate, (input: any): input is InstanceUnion => {
    const $io0 = (input: any) => "object" === typeof input.scale && null !== input.scale && ("number" === typeof input.scale.x && "number" === typeof input.scale.y && "number" === typeof input.scale.z) && ("object" === typeof input.position && null !== input.position && ("number" === typeof input.position.x && "number" === typeof input.position.y && "number" === typeof input.position.z)) && ("object" === typeof input.rotate && null !== input.rotate && ("number" === typeof input.rotate.x && "number" === typeof input.rotate.y && "number" === typeof input.rotate.z)) && ("object" === typeof input.pivot && null !== input.pivot && ("number" === typeof input.pivot.x && "number" === typeof input.pivot.y && "number" === typeof input.pivot.z));
    const $io2 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && "point" === input.type;
    const $io3 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof input.p1.x && "number" === typeof input.p1.y) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof input.p2.x && "number" === typeof input.p2.y)) && "line" === input.type;
    const $io4 = (input: any) => "number" === typeof input.x && "number" === typeof input.y;
    const $io5 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof input.p1.x && "number" === typeof input.p1.y) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof input.p2.x && "number" === typeof input.p2.y)) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof input.p3.x && "number" === typeof input.p3.y)) && "triangle" === input.type;
    const $io6 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof input.p1.x && "number" === typeof input.p1.y) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof input.p2.x && "number" === typeof input.p2.y)) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof input.p3.x && "number" === typeof input.p3.y)) && ("object" === typeof input.p4 && null !== input.p4 && ("number" === typeof input.p4.x && "number" === typeof input.p4.y)) && "rectangle" === input.type;
    const $io7 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem)) && "polyline" === input.type;
    const $io8 = (input: any) => "object" === typeof input.outer && null !== input.outer && $io9(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io9(elem))) && "polygon" === input.type;
    const $io9 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem));
    const $io10 = (input: any) => "object" === typeof input.centroid && null !== input.centroid && ("number" === typeof input.centroid.x && "number" === typeof input.centroid.y) && "number" === typeof input.radius && "circle" === input.type;
    const $iu0 = (input: any) => (() => {
        if ("point" === input.type)
            return $io2(input);
        if ("line" === input.type)
            return $io3(input);
        if ("triangle" === input.type)
            return $io5(input);
        if ("rectangle" === input.type)
            return $io6(input);
        if ("polyline" === input.type)
            return $io7(input);
        if ("polygon" === input.type)
            return $io8(input);
        if ("circle" === input.type)
            return $io10(input);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any) => null !== elem && undefined !== elem && ("number" === typeof elem || elem instanceof Uint8Array || (elem instanceof Set && [...elem].every((elem: any) => "boolean" === typeof elem) || elem instanceof Map || Array.isArray(elem) && (() => {
        if (0 === elem.length)
            return true;
        const tupleList = [[top => elem.length === 2 && "string" === typeof elem[0] && "string" === typeof elem[1], top => top.length === 2 && "string" === typeof top[0] && "string" === typeof top[1]], [top => elem.length === 3 && "boolean" === typeof elem[0] && "number" === typeof elem[1] && "number" === typeof elem[2], top => top.length === 3 && "boolean" === typeof top[0] && "number" === typeof top[1] && "number" === typeof top[2]], [top => elem.length === 0, top => top.length === 0], [top => "object" === typeof top && null !== top && $iu0(top), top => top.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem))], [top => "boolean" === typeof top, top => top.every((elem: any) => "boolean" === typeof elem)], [top => "number" === typeof top, top => top.every((elem: any) => "number" === typeof elem)]];
        const front = elem[0];
        const filtered = tupleList.filter(tuple => true === tuple[0](front));
        if (1 === filtered.length)
            return filtered[0][1](elem);
        const array = elem;
        if (1 < filtered.length)
            for (const tuple of filtered)
                if (array.every((value: any) => true === tuple[0](value)))
                    return tuple[1](array);
        return false;
    })() || "object" === typeof elem && null !== elem && $io0(elem))));
});
