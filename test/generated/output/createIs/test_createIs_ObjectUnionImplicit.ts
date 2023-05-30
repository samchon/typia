import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";
export const test_createIs_ObjectUnionImplicit = _test_is("ObjectUnionImplicit", ObjectUnionImplicit.generate, (input: any): input is ObjectUnionImplicit => {
    const $io0 = (input: any): boolean => "number" === typeof input.x && Number.isFinite(input.x) && ("number" === typeof input.y && Number.isFinite(input.y)) && (null === input.slope || undefined === input.slope || "number" === typeof input.slope && Number.isFinite(input.slope));
    const $io1 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && (null === input.width || undefined === input.width || "number" === typeof input.width && Number.isFinite(input.width)) && (null === input.distance || undefined === input.distance || "number" === typeof input.distance && Number.isFinite(input.distance));
    const $io2 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && (null === input.width || undefined === input.width || "number" === typeof input.width && Number.isFinite(input.width)) && (null === input.height || undefined === input.height || "number" === typeof input.height && Number.isFinite(input.height)) && (null === input.area || undefined === input.area || "number" === typeof input.area && Number.isFinite(input.area));
    const $io3 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4)) && (null === input.width || undefined === input.width || "number" === typeof input.width && Number.isFinite(input.width)) && (null === input.height || undefined === input.height || "number" === typeof input.height && Number.isFinite(input.height)) && (null === input.area || undefined === input.area || "number" === typeof input.area && Number.isFinite(input.area));
    const $io4 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && (null === input.length || undefined === input.length || "number" === typeof input.length && Number.isFinite(input.length));
    const $io5 = (input: any): boolean => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (undefined === input.inner || Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem))) && (null === input.area || undefined === input.area || "number" === typeof input.area && Number.isFinite(input.area));
    const $io6 = (input: any): boolean => (undefined === input.centroid || "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid)) && ("number" === typeof input.radius && Number.isFinite(input.radius)) && (null === input.area || undefined === input.area || "number" === typeof input.area && Number.isFinite(input.area));
    const $iu0 = (input: any): any => (() => {
        if (undefined !== input.x)
            return $io0(input);
        if (undefined !== input.p4)
            return $io3(input);
        if (undefined !== input.points)
            return $io4(input);
        if (undefined !== input.outer)
            return $io5(input);
        if (undefined !== input.radius)
            return $io6(input);
        return (() => {
            if (undefined !== input.p3)
                return $io2(input);
            return $io1(input);
        })();
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}, ObjectUnionImplicit.SPOILERS);
