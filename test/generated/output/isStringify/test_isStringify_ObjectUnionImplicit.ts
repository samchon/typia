import typia from "../../../src";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ObjectUnionImplicit = _test_isStringify("ObjectUnionImplicit", ObjectUnionImplicit.generate, (input) => ((input: ObjectUnionImplicit): string | null => { const is = (input: any): input is ObjectUnionImplicit => {
    const $io0 = (input: any) => "number" === typeof input.x && !Number.isNaN(input.x) && ("number" === typeof input.y && !Number.isNaN(input.y)) && (undefined === input.slope || "number" === typeof input.slope && !Number.isNaN(input.slope));
    const $io1 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && (undefined === input.width || "number" === typeof input.width && !Number.isNaN(input.width)) && (undefined === input.distance || "number" === typeof input.distance && !Number.isNaN(input.distance));
    const $io2 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && (undefined === input.width || "number" === typeof input.width && !Number.isNaN(input.width)) && (undefined === input.height || "number" === typeof input.height && !Number.isNaN(input.height)) && (undefined === input.area || "number" === typeof input.area && !Number.isNaN(input.area));
    const $io3 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4)) && (undefined === input.width || "number" === typeof input.width && !Number.isNaN(input.width)) && (undefined === input.height || "number" === typeof input.height && !Number.isNaN(input.height)) && (undefined === input.area || "number" === typeof input.area && !Number.isNaN(input.area));
    const $io4 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && (undefined === input.length || "number" === typeof input.length && !Number.isNaN(input.length));
    const $io5 = (input: any) => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (undefined === input.inner || Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem))) && (undefined === input.area || "number" === typeof input.area && !Number.isNaN(input.area));
    const $io6 = (input: any) => (undefined === input.centroid || "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid)) && ("number" === typeof input.radius && !Number.isNaN(input.radius)) && (undefined === input.area || "number" === typeof input.area && !Number.isNaN(input.area));
    const $iu0 = (input: any) => (() => {
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
}; const stringify = (input: ObjectUnionImplicit): string => {
    const $io0 = (input: any) => "number" === typeof input.x && "number" === typeof input.y && (undefined === input.slope || "number" === typeof input.slope);
    const $io1 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.distance || "number" === typeof input.distance);
    const $io2 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.area || "number" === typeof input.area);
    const $io3 = (input: any) => "object" === typeof input.p1 && null !== input.p1 && $io0(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io0(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io0(input.p3)) && ("object" === typeof input.p4 && null !== input.p4 && $io0(input.p4)) && (undefined === input.width || "number" === typeof input.width) && (undefined === input.height || "number" === typeof input.height) && (undefined === input.area || "number" === typeof input.area);
    const $io4 = (input: any) => Array.isArray(input.points) && input.points.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem)) && (undefined === input.length || "number" === typeof input.length);
    const $io5 = (input: any) => "object" === typeof input.outer && null !== input.outer && $io4(input.outer) && (undefined === input.inner || Array.isArray(input.inner) && input.inner.every((elem: any) => "object" === typeof elem && null !== elem && $io4(elem))) && (undefined === input.area || "number" === typeof input.area);
    const $io6 = (input: any) => (undefined === input.centroid || "object" === typeof input.centroid && null !== input.centroid && $io0(input.centroid)) && "number" === typeof input.radius && (undefined === input.area || "number" === typeof input.area);
    const $iu0 = (input: any) => (() => {
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
    const $so0 = (input: any) => `{${undefined === input.slope ? "" : `"slope":${undefined !== input.slope ? input.slope : undefined},`}"x":${input.x},"y":${input.y}}`;
    const $so1 = (input: any) => `{${undefined === input.width ? "" : `"width":${undefined !== input.width ? input.width : undefined},`}${undefined === input.distance ? "" : `"distance":${undefined !== input.distance ? input.distance : undefined},`}"p1":${$so0(input.p1)},"p2":${$so0(input.p2)}}`;
    const $so2 = (input: any) => `{${undefined === input.width ? "" : `"width":${undefined !== input.width ? input.width : undefined},`}${undefined === input.height ? "" : `"height":${undefined !== input.height ? input.height : undefined},`}${undefined === input.area ? "" : `"area":${undefined !== input.area ? input.area : undefined},`}"p1":${$so0(input.p1)},"p2":${$so0(input.p2)},"p3":${$so0(input.p3)}}`;
    const $so3 = (input: any) => `{${undefined === input.width ? "" : `"width":${undefined !== input.width ? input.width : undefined},`}${undefined === input.height ? "" : `"height":${undefined !== input.height ? input.height : undefined},`}${undefined === input.area ? "" : `"area":${undefined !== input.area ? input.area : undefined},`}"p1":${$so0(input.p1)},"p2":${$so0(input.p2)},"p3":${$so0(input.p3)},"p4":${$so0(input.p4)}}`;
    const $so4 = (input: any) => `{${undefined === input.length ? "" : `"length":${undefined !== input.length ? input.length : undefined},`}"points":${`[${input.points.map((elem: any) => $so0(elem)).join(",")}]`}}`;
    const $so5 = (input: any) => `{${undefined === input.inner ? "" : `"inner":${undefined !== input.inner ? `[${input.inner.map((elem: any) => $so4(elem)).join(",")}]` : undefined},`}${undefined === input.area ? "" : `"area":${undefined !== input.area ? input.area : undefined},`}"outer":${$so4(input.outer)}}`;
    const $so6 = (input: any) => `{${undefined === input.centroid ? "" : `"centroid":${undefined !== input.centroid ? $so0(input.centroid) : undefined},`}${undefined === input.area ? "" : `"area":${undefined !== input.area ? input.area : undefined},`}"radius":${input.radius}}`;
    const $su0 = (input: any) => (() => {
        if (undefined !== input.x)
            return $so0(input);
        if (undefined !== input.p4)
            return $so3(input);
        if (undefined !== input.points)
            return $so4(input);
        if (undefined !== input.outer)
            return $so5(input);
        if (undefined !== input.radius)
            return $so6(input);
        return (() => {
            if (undefined !== input.p3)
                return $so2(input);
            return $so1(input);
        })();
    })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
}; return is(input) ? stringify(input) : null; })(input), ObjectUnionImplicit.SPOILERS);
