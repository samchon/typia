import typia from "../../../../src";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";
import { _test_isParse } from "../../../internal/_test_isParse";
export const test_createIsParse_ObjectUnionComposite = _test_isParse("ObjectUnionComposite", ObjectUnionComposite.generate, (input: any): typia.Primitive<ObjectUnionComposite> => { const is = (input: any): input is ObjectUnionComposite => {
    const $io0 = (input: any): boolean => "number" === typeof input.x && Number.isFinite(input.x) && ("number" === typeof input.y && Number.isFinite(input.y));
    const $io1 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof (input.p1 as any).x && Number.isFinite((input.p1 as any).x) && ("number" === typeof (input.p1 as any).y && Number.isFinite((input.p1 as any).y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof (input.p2 as any).x && Number.isFinite((input.p2 as any).x) && ("number" === typeof (input.p2 as any).y && Number.isFinite((input.p2 as any).y))));
    const $io2 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof (input.p1 as any).x && Number.isFinite((input.p1 as any).x) && ("number" === typeof (input.p1 as any).y && Number.isFinite((input.p1 as any).y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof (input.p2 as any).x && Number.isFinite((input.p2 as any).x) && ("number" === typeof (input.p2 as any).y && Number.isFinite((input.p2 as any).y)))) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof (input.p3 as any).x && Number.isFinite((input.p3 as any).x) && ("number" === typeof (input.p3 as any).y && Number.isFinite((input.p3 as any).y))));
    const $io3 = (input: any): boolean => "object" === typeof input.p1 && null !== input.p1 && ("number" === typeof (input.p1 as any).x && Number.isFinite((input.p1 as any).x) && ("number" === typeof (input.p1 as any).y && Number.isFinite((input.p1 as any).y))) && ("object" === typeof input.p2 && null !== input.p2 && ("number" === typeof (input.p2 as any).x && Number.isFinite((input.p2 as any).x) && ("number" === typeof (input.p2 as any).y && Number.isFinite((input.p2 as any).y)))) && ("object" === typeof input.p3 && null !== input.p3 && ("number" === typeof (input.p3 as any).x && Number.isFinite((input.p3 as any).x) && ("number" === typeof (input.p3 as any).y && Number.isFinite((input.p3 as any).y)))) && ("object" === typeof input.p4 && null !== input.p4 && ("number" === typeof (input.p4 as any).x && Number.isFinite((input.p4 as any).x) && ("number" === typeof (input.p4 as any).y && Number.isFinite((input.p4 as any).y))));
    const $io4 = (input: any): boolean => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    const $io5 = (input: any): boolean => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem)));
    const $io6 = (input: any): boolean => Array.isArray(input.outer) && input.outer.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && ("object" === typeof input.inner && null !== input.inner && ("number" === typeof (input.inner as any).x && Number.isFinite((input.inner as any).x) && ("number" === typeof (input.inner as any).y && Number.isFinite((input.inner as any).y))));
    const $io7 = (input: any): boolean => "object" === typeof input.centroid && null !== input.centroid && ("number" === typeof (input.centroid as any).x && Number.isFinite((input.centroid as any).x) && ("number" === typeof (input.centroid as any).y && Number.isFinite((input.centroid as any).y))) && ("number" === typeof input.radius && Number.isFinite(input.radius));
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
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectUnionComposite.SPOILERS);
