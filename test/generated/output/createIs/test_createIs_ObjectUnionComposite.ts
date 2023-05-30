import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
export const test_createIs_ObjectUnionComposite = _test_is("ObjectUnionComposite", ObjectUnionComposite.generate, (input: any): input is ObjectUnionComposite => {
    const $io0 = (input: any): boolean => "number" === typeof input.x && Number.isFinite(input.x) && ("number" === typeof input.y && Number.isFinite(input.y));
    const $io1 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof input.p1.x && Number.isFinite(input.p1.x) && ("number" === typeof input.p1.y && Number.isFinite(input.p1.y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof input.p2.x && Number.isFinite(input.p2.x) && ("number" === typeof input.p2.y && Number.isFinite(input.p2.y))));
    const $io2 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof input.p1.x && Number.isFinite(input.p1.x) && ("number" === typeof input.p1.y && Number.isFinite(input.p1.y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof input.p2.x && Number.isFinite(input.p2.x) && ("number" === typeof input.p2.y && Number.isFinite(input.p2.y)))) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof input.p3.x && Number.isFinite(input.p3.x) && ("number" === typeof input.p3.y && Number.isFinite(input.p3.y))));
    const $io3 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof input.p1.x && Number.isFinite(input.p1.x) && ("number" === typeof input.p1.y && Number.isFinite(input.p1.y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof input.p2.x && Number.isFinite(input.p2.x) && ("number" === typeof input.p2.y && Number.isFinite(input.p2.y)))) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof input.p3.x && Number.isFinite(input.p3.x) && ("number" === typeof input.p3.y && Number.isFinite(input.p3.y)))) && ("object" === typeof input.p4 && null !== input.p4 && ("number" === typeof input.p4.x && Number.isFinite(input.p4.x) && ("number" === typeof input.p4.y && Number.isFinite(input.p4.y))));
    const $io4 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    const $io5 = (input: any): boolean => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem)));
    const $io6 = (input: any): boolean => Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && ("object" === typeof input.inner && null !== input.inner && ("number" === typeof input.inner.x && Number.isFinite(input.inner.x) && ("number" === typeof input.inner.y && Number.isFinite(input.inner.y))));
    const $io7 = (input: any): boolean => "object" === typeof input.centroid && null !== input.centroid && ("number" === typeof input.centroid.x && Number.isFinite(input.centroid.x) && ("number" === typeof input.centroid.y && Number.isFinite(input.centroid.y))) && ("number" === typeof input.radius && Number.isFinite(input.radius));
    const $iu0 = (input: any): any => (() => {
        if (undefined !== input.x)
            return $io0(input);
        if (undefined !== input.p4)
            return $io3(input);
        if (undefined !== input.points)
            return $io4(input);
        if (Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)))
            return $io6(input);
        if ("object" === typeof input.outer && null !== input.outer && $io4(input.outer))
            return $io5(input);
        if (undefined !== input.centroid)
            return $io7(input);
        return (() => {
            if (undefined !== input.p3)
                return $io2(input);
            return $io1(input);
        })();
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}, ObjectUnionComposite.SPOILERS);
