import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ObjectUnionCompositePointer } from "../../../structures/ObjectUnionCompositePointer";

export const test_protobuf_validateEncode_ObjectUnionCompositePointer =
    _test_protobuf_validateEncode(
        "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)({
        validateEncode: (
            input: ObjectUnionCompositePointer,
        ): typia.IValidation<Uint8Array> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectUnionCompositePointer> => {
                const errors = [] as any[];
                const __is = (
                    input: any,
                ): input is ObjectUnionCompositePointer => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $iu0(input.value);
                    const $io2 = (input: any): boolean =>
                        "number" === typeof input.x &&
                        Number.isFinite(input.x) &&
                        "number" === typeof input.y &&
                        Number.isFinite(input.y);
                    const $io3 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        "number" === typeof (input.p1 as any).x &&
                        Number.isFinite((input.p1 as any).x) &&
                        "number" === typeof (input.p1 as any).y &&
                        Number.isFinite((input.p1 as any).y) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        "number" === typeof (input.p2 as any).x &&
                        Number.isFinite((input.p2 as any).x) &&
                        "number" === typeof (input.p2 as any).y &&
                        Number.isFinite((input.p2 as any).y);
                    const $io4 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        "number" === typeof (input.p1 as any).x &&
                        Number.isFinite((input.p1 as any).x) &&
                        "number" === typeof (input.p1 as any).y &&
                        Number.isFinite((input.p1 as any).y) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        "number" === typeof (input.p2 as any).x &&
                        Number.isFinite((input.p2 as any).x) &&
                        "number" === typeof (input.p2 as any).y &&
                        Number.isFinite((input.p2 as any).y) &&
                        "object" === typeof input.p3 &&
                        null !== input.p3 &&
                        "number" === typeof (input.p3 as any).x &&
                        Number.isFinite((input.p3 as any).x) &&
                        "number" === typeof (input.p3 as any).y &&
                        Number.isFinite((input.p3 as any).y);
                    const $io5 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        "number" === typeof (input.p1 as any).x &&
                        Number.isFinite((input.p1 as any).x) &&
                        "number" === typeof (input.p1 as any).y &&
                        Number.isFinite((input.p1 as any).y) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        "number" === typeof (input.p2 as any).x &&
                        Number.isFinite((input.p2 as any).x) &&
                        "number" === typeof (input.p2 as any).y &&
                        Number.isFinite((input.p2 as any).y) &&
                        "object" === typeof input.p3 &&
                        null !== input.p3 &&
                        "number" === typeof (input.p3 as any).x &&
                        Number.isFinite((input.p3 as any).x) &&
                        "number" === typeof (input.p3 as any).y &&
                        Number.isFinite((input.p3 as any).y) &&
                        "object" === typeof input.p4 &&
                        null !== input.p4 &&
                        "number" === typeof (input.p4 as any).x &&
                        Number.isFinite((input.p4 as any).x) &&
                        "number" === typeof (input.p4 as any).y &&
                        Number.isFinite((input.p4 as any).y);
                    const $io6 = (input: any): boolean =>
                        Array.isArray(input.points) &&
                        input.points.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        );
                    const $io7 = (input: any): boolean =>
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io6(input.outer) &&
                        Array.isArray(input.inner) &&
                        input.inner.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io6(elem),
                        );
                    const $io8 = (input: any): boolean =>
                        Array.isArray(input.outer) &&
                        input.outer.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ) &&
                        "object" === typeof input.inner &&
                        null !== input.inner &&
                        "number" === typeof (input.inner as any).x &&
                        Number.isFinite((input.inner as any).x) &&
                        "number" === typeof (input.inner as any).y &&
                        Number.isFinite((input.inner as any).y);
                    const $io9 = (input: any): boolean =>
                        "object" === typeof input.centroid &&
                        null !== input.centroid &&
                        "number" === typeof (input.centroid as any).x &&
                        Number.isFinite((input.centroid as any).x) &&
                        "number" === typeof (input.centroid as any).y &&
                        Number.isFinite((input.centroid as any).y) &&
                        "number" === typeof input.radius &&
                        Number.isFinite(input.radius);
                    const $iu0 = (input: any): any =>
                        (() => {
                            if (undefined !== input.x) return $io2(input);
                            else if (undefined !== input.p4) return $io5(input);
                            else if (undefined !== input.points)
                                return $io6(input);
                            else if (
                                Array.isArray(input.outer) &&
                                input.outer.every(
                                    (elem: any) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        $io2(elem),
                                )
                            )
                                return $io8(input);
                            else if (
                                "object" === typeof input.outer &&
                                null !== input.outer &&
                                $io6(input.outer)
                            )
                                return $io7(input);
                            else if (undefined !== input.centroid)
                                return $io9(input);
                            else
                                return (() => {
                                    if (undefined !== input.p3)
                                        return $io4(input);
                                    else return $io3(input);
                                })();
                        })();
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateEncode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectUnionCompositePointer => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                                        value: input.value,
                                    })) &&
                                    input.value
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                                                        value: elem,
                                                    })) &&
                                                    $vo1(
                                                        elem,
                                                        _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.value &&
                                    null !== input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                                        value: input.value,
                                    })) &&
                                    $vu0(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "(ObjectUnionCompositePointer.ICircle | ObjectUnionCompositePointer.ILine | ObjectUnionCompositePointer.IPoint | ObjectUnionCompositePointer.IPointedShape | ObjectUnionCompositePointer.IPolygon | ObjectUnionCompositePointer.IPolyline | ObjectUnionCompositePointer.IRectangle | ObjectUnionCompositePointer.ITriangle)",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.x &&
                                    Number.isFinite(input.x)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".x",
                                        expected: "number",
                                        value: input.x,
                                    }),
                                ("number" === typeof input.y &&
                                    Number.isFinite(input.y)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".y",
                                        expected: "number",
                                        value: input.y,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    })) &&
                                    $vo2(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    }),
                                ((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    })) &&
                                    $vo2(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo4 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    })) &&
                                    $vo2(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    }),
                                ((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    })) &&
                                    $vo2(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    }),
                                ((("object" === typeof input.p3 &&
                                    null !== input.p3) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p3,
                                    })) &&
                                    $vo2(
                                        input.p3,
                                        _path + ".p3",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p3,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo5 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.p1 &&
                                    null !== input.p1) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    })) &&
                                    $vo2(
                                        input.p1,
                                        _path + ".p1",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p1",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p1,
                                    }),
                                ((("object" === typeof input.p2 &&
                                    null !== input.p2) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    })) &&
                                    $vo2(
                                        input.p2,
                                        _path + ".p2",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p2",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p2,
                                    }),
                                ((("object" === typeof input.p3 &&
                                    null !== input.p3) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p3,
                                    })) &&
                                    $vo2(
                                        input.p3,
                                        _path + ".p3",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p3",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p3,
                                    }),
                                ((("object" === typeof input.p4 &&
                                    null !== input.p4) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p4",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p4,
                                    })) &&
                                    $vo2(
                                        input.p4,
                                        _path + ".p4",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".p4",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.p4,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo6 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.points) ||
                                    $report(_exceptionable, {
                                        path: _path + ".points",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPoint>",
                                        value: input.points,
                                    })) &&
                                    input.points
                                        .map(
                                            (elem: any, _index2: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".points[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "ObjectUnionCompositePointer.IPoint",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            ".points[" +
                                                            _index2 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".points[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionCompositePointer.IPoint",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".points",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPoint>",
                                        value: input.points,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo7 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.outer &&
                                    null !== input.outer) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "ObjectUnionCompositePointer.IPolyline",
                                        value: input.outer,
                                    })) &&
                                    $vo6(
                                        input.outer,
                                        _path + ".outer",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "ObjectUnionCompositePointer.IPolyline",
                                        value: input.outer,
                                    }),
                                ((Array.isArray(input.inner) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPolyline>",
                                        value: input.inner,
                                    })) &&
                                    input.inner
                                        .map(
                                            (elem: any, _index3: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".inner[" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "ObjectUnionCompositePointer.IPolyline",
                                                        value: elem,
                                                    })) &&
                                                    $vo6(
                                                        elem,
                                                        _path +
                                                            ".inner[" +
                                                            _index3 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".inner[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionCompositePointer.IPolyline",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPolyline>",
                                        value: input.inner,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo8 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.outer) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPoint>",
                                        value: input.outer,
                                    })) &&
                                    input.outer
                                        .map(
                                            (elem: any, _index4: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".outer[" +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "ObjectUnionCompositePointer.IPoint",
                                                        value: elem,
                                                    })) &&
                                                    $vo2(
                                                        elem,
                                                        _path +
                                                            ".outer[" +
                                                            _index4 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".outer[" +
                                                        _index4 +
                                                        "]",
                                                    expected:
                                                        "ObjectUnionCompositePointer.IPoint",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".outer",
                                        expected:
                                            "Array<ObjectUnionCompositePointer.IPoint>",
                                        value: input.outer,
                                    }),
                                ((("object" === typeof input.inner &&
                                    null !== input.inner) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.inner,
                                    })) &&
                                    $vo2(
                                        input.inner,
                                        _path + ".inner",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".inner",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.inner,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo9 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.centroid &&
                                    null !== input.centroid) ||
                                    $report(_exceptionable, {
                                        path: _path + ".centroid",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.centroid,
                                    })) &&
                                    $vo2(
                                        input.centroid,
                                        _path + ".centroid",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".centroid",
                                        expected:
                                            "ObjectUnionCompositePointer.IPoint",
                                        value: input.centroid,
                                    }),
                                ("number" === typeof input.radius &&
                                    Number.isFinite(input.radius)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".radius",
                                        expected: "number",
                                        value: input.radius,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vu0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if (undefined !== input.x)
                                    return $vo2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if (undefined !== input.p4)
                                    return $vo5(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if (undefined !== input.points)
                                    return $vo6(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if (
                                    Array.isArray(input.outer) &&
                                    input.outer
                                        .map(
                                            (elem: any, _index5: number) =>
                                                "object" === typeof elem &&
                                                null !== elem &&
                                                $vo2(
                                                    elem,
                                                    _path +
                                                        ".outer[" +
                                                        _index5 +
                                                        "]",
                                                    false && _exceptionable,
                                                ),
                                        )
                                        .every((flag: boolean) => flag)
                                )
                                    return $vo8(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if (
                                    "object" === typeof input.outer &&
                                    null !== input.outer &&
                                    $vo6(
                                        input.outer,
                                        _path + ".outer",
                                        false && _exceptionable,
                                    )
                                )
                                    return $vo7(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if (undefined !== input.centroid)
                                    return $vo9(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else
                                    return (() => {
                                        if (undefined !== input.p3)
                                            return $vo4(
                                                input,
                                                _path,
                                                true && _exceptionable,
                                            );
                                        else
                                            return $vo3(
                                                input,
                                                _path,
                                                true && _exceptionable,
                                            );
                                    })();
                            })();
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectUnionCompositePointer",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectUnionCompositePointer",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                }
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const encode = (input: ObjectUnionCompositePointer): Uint8Array => {
                const $Sizer = (typia.protobuf.createValidateEncode as any)
                    .Sizer;
                const $Writer = (typia.protobuf.createValidateEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "value";
                        if (0 !== input.value.length) {
                            for (const elem of input.value) {
                                // 1 -> IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>;
                                writer.uint32(10);
                                writer.fork();
                                $peo1(elem);
                                writer.ldelim();
                            }
                        }
                    };
                    const $peo1 = (input: any): any => {
                        // property "value";
                        if (undefined !== input.value.x)
                            return (() => {
                                // 1 -> ObjectUnionCompositePointer.IPoint;
                                writer.uint32(10);
                                writer.fork();
                                $peo2(input.value);
                                writer.ldelim();
                            })();
                        else if (undefined !== input.value.p4)
                            return (() => {
                                // 4 -> ObjectUnionCompositePointer.IRectangle;
                                writer.uint32(34);
                                writer.fork();
                                $peo5(input.value);
                                writer.ldelim();
                            })();
                        else if (undefined !== input.value.points)
                            return (() => {
                                // 5 -> ObjectUnionCompositePointer.IPolyline;
                                writer.uint32(42);
                                writer.fork();
                                $peo6(input.value);
                                writer.ldelim();
                            })();
                        else if (
                            Array.isArray(input.value.outer) &&
                            input.value.outer.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            )
                        )
                            return (() => {
                                // 6 -> ObjectUnionCompositePointer.IPointedShape;
                                writer.uint32(50);
                                writer.fork();
                                $peo8(input.value);
                                writer.ldelim();
                            })();
                        else if (
                            "object" === typeof input.value.outer &&
                            null !== input.value.outer &&
                            $io6(input.value.outer)
                        )
                            return (() => {
                                // 7 -> ObjectUnionCompositePointer.IPolygon;
                                writer.uint32(58);
                                writer.fork();
                                $peo7(input.value);
                                writer.ldelim();
                            })();
                        else if (undefined !== input.value.centroid)
                            return (() => {
                                // 8 -> ObjectUnionCompositePointer.ICircle;
                                writer.uint32(66);
                                writer.fork();
                                $peo9(input.value);
                                writer.ldelim();
                            })();
                        else
                            return (() => {
                                if (undefined !== input.value.p3)
                                    return (() => {
                                        // 3 -> ObjectUnionCompositePointer.ITriangle;
                                        writer.uint32(26);
                                        writer.fork();
                                        $peo4(input.value);
                                        writer.ldelim();
                                    })();
                                else
                                    return (() => {
                                        // 2 -> ObjectUnionCompositePointer.ILine;
                                        writer.uint32(18);
                                        writer.fork();
                                        $peo3(input.value);
                                        writer.ldelim();
                                    })();
                            })();
                    };
                    const $peo2 = (input: any): any => {
                        // property "x";
                        writer.uint32(9);
                        writer.double(input.x);
                        // property "y";
                        writer.uint32(17);
                        writer.double(input.y);
                    };
                    const $peo3 = (input: any): any => {
                        // property "p1";
                        // 1 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(10);
                        writer.fork();
                        $peo2(input.p1);
                        writer.ldelim();
                        // property "p2";
                        // 2 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(18);
                        writer.fork();
                        $peo2(input.p2);
                        writer.ldelim();
                    };
                    const $peo4 = (input: any): any => {
                        // property "p1";
                        // 1 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(10);
                        writer.fork();
                        $peo2(input.p1);
                        writer.ldelim();
                        // property "p2";
                        // 2 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(18);
                        writer.fork();
                        $peo2(input.p2);
                        writer.ldelim();
                        // property "p3";
                        // 3 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(26);
                        writer.fork();
                        $peo2(input.p3);
                        writer.ldelim();
                    };
                    const $peo5 = (input: any): any => {
                        // property "p1";
                        // 1 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(10);
                        writer.fork();
                        $peo2(input.p1);
                        writer.ldelim();
                        // property "p2";
                        // 2 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(18);
                        writer.fork();
                        $peo2(input.p2);
                        writer.ldelim();
                        // property "p3";
                        // 3 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(26);
                        writer.fork();
                        $peo2(input.p3);
                        writer.ldelim();
                        // property "p4";
                        // 4 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(34);
                        writer.fork();
                        $peo2(input.p4);
                        writer.ldelim();
                    };
                    const $peo6 = (input: any): any => {
                        // property "points";
                        if (0 !== input.points.length) {
                            for (const elem of input.points) {
                                // 1 -> ObjectUnionCompositePointer.IPoint;
                                writer.uint32(10);
                                writer.fork();
                                $peo2(elem);
                                writer.ldelim();
                            }
                        }
                    };
                    const $peo7 = (input: any): any => {
                        // property "outer";
                        // 1 -> ObjectUnionCompositePointer.IPolyline;
                        writer.uint32(10);
                        writer.fork();
                        $peo6(input.outer);
                        writer.ldelim();
                        // property "inner";
                        if (0 !== input.inner.length) {
                            for (const elem of input.inner) {
                                // 2 -> ObjectUnionCompositePointer.IPolyline;
                                writer.uint32(18);
                                writer.fork();
                                $peo6(elem);
                                writer.ldelim();
                            }
                        }
                    };
                    const $peo8 = (input: any): any => {
                        // property "outer";
                        if (0 !== input.outer.length) {
                            for (const elem of input.outer) {
                                // 1 -> ObjectUnionCompositePointer.IPoint;
                                writer.uint32(10);
                                writer.fork();
                                $peo2(elem);
                                writer.ldelim();
                            }
                        }
                        // property "inner";
                        // 2 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(18);
                        writer.fork();
                        $peo2(input.inner);
                        writer.ldelim();
                    };
                    const $peo9 = (input: any): any => {
                        // property "centroid";
                        // 1 -> ObjectUnionCompositePointer.IPoint;
                        writer.uint32(10);
                        writer.fork();
                        $peo2(input.centroid);
                        writer.ldelim();
                        // property "radius";
                        writer.uint32(17);
                        writer.double(input.radius);
                    };
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $iu0(input.value);
                    const $io2 = (input: any): boolean =>
                        "number" === typeof input.x &&
                        "number" === typeof input.y;
                    const $io3 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        $io2(input.p1) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        $io2(input.p2);
                    const $io4 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        $io2(input.p1) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        $io2(input.p2) &&
                        "object" === typeof input.p3 &&
                        null !== input.p3 &&
                        $io2(input.p3);
                    const $io5 = (input: any): boolean =>
                        "object" === typeof input.p1 &&
                        null !== input.p1 &&
                        $io2(input.p1) &&
                        "object" === typeof input.p2 &&
                        null !== input.p2 &&
                        $io2(input.p2) &&
                        "object" === typeof input.p3 &&
                        null !== input.p3 &&
                        $io2(input.p3) &&
                        "object" === typeof input.p4 &&
                        null !== input.p4 &&
                        $io2(input.p4);
                    const $io6 = (input: any): boolean =>
                        Array.isArray(input.points) &&
                        input.points.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        );
                    const $io7 = (input: any): boolean =>
                        "object" === typeof input.outer &&
                        null !== input.outer &&
                        $io6(input.outer) &&
                        Array.isArray(input.inner) &&
                        input.inner.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io6(elem),
                        );
                    const $io8 = (input: any): boolean =>
                        Array.isArray(input.outer) &&
                        input.outer.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io2(elem),
                        ) &&
                        "object" === typeof input.inner &&
                        null !== input.inner &&
                        $io2(input.inner);
                    const $io9 = (input: any): boolean =>
                        "object" === typeof input.centroid &&
                        null !== input.centroid &&
                        $io2(input.centroid) &&
                        "number" === typeof input.radius;
                    const $iu0 = (input: any): any =>
                        (() => {
                            if (undefined !== input.x) return $io2(input);
                            else if (undefined !== input.p4) return $io5(input);
                            else if (undefined !== input.points)
                                return $io6(input);
                            else if (
                                Array.isArray(input.outer) &&
                                input.outer.every(
                                    (elem: any) =>
                                        "object" === typeof elem &&
                                        null !== elem &&
                                        $io2(elem),
                                )
                            )
                                return $io8(input);
                            else if (
                                "object" === typeof input.outer &&
                                null !== input.outer &&
                                $io6(input.outer)
                            )
                                return $io7(input);
                            else if (undefined !== input.centroid)
                                return $io9(input);
                            else
                                return (() => {
                                    if (undefined !== input.p3)
                                        return $io4(input);
                                    else return $io3(input);
                                })();
                        })();
                    //ObjectUnionCompositePointer;
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            const output = validate(input) as any;
            if (output.success) output.data = encode(input);
            return output;
        },
        message:
            'syntax = "proto3";\n\nmessage ObjectUnionCompositePointer {\n    repeated IPointer_lt_IPoint_space__or__space_ILine_space__or__space_ITriangle_space__or__space_IRectangle_space__or__space_IPolyline_space__or__space_IPolygon_space__or__space_IPointedShape_space__or__space_ICircle_gt_ value = 1;\n    message IPoint {\n        required double x = 1;\n        required double y = 2;\n    }\n\n    message ILine {\n        required ObjectUnionCompositePointer.IPoint p1 = 1;\n        required ObjectUnionCompositePointer.IPoint p2 = 2;\n    }\n\n    message ITriangle {\n        required ObjectUnionCompositePointer.IPoint p1 = 1;\n        required ObjectUnionCompositePointer.IPoint p2 = 2;\n        required ObjectUnionCompositePointer.IPoint p3 = 3;\n    }\n\n    message IRectangle {\n        required ObjectUnionCompositePointer.IPoint p1 = 1;\n        required ObjectUnionCompositePointer.IPoint p2 = 2;\n        required ObjectUnionCompositePointer.IPoint p3 = 3;\n        required ObjectUnionCompositePointer.IPoint p4 = 4;\n    }\n\n    message IPolyline {\n        repeated ObjectUnionCompositePointer.IPoint points = 1;\n    }\n\n    message IPolygon {\n        required ObjectUnionCompositePointer.IPolyline outer = 1;\n        repeated ObjectUnionCompositePointer.IPolyline inner = 2;\n    }\n\n    message IPointedShape {\n        repeated ObjectUnionCompositePointer.IPoint outer = 1;\n        required ObjectUnionCompositePointer.IPoint inner = 2;\n    }\n\n    message ICircle {\n        required ObjectUnionCompositePointer.IPoint centroid = 1;\n        required double radius = 2;\n    }\n}\n\nmessage IPointer_lt_IPoint_space__or__space_ILine_space__or__space_ITriangle_space__or__space_IRectangle_space__or__space_IPolyline_space__or__space_IPolygon_space__or__space_IPointedShape_space__or__space_ICircle_gt_ {\n    oneof value {\n        ObjectUnionCompositePointer.IPoint v1 = 1;\n        ObjectUnionCompositePointer.ILine v2 = 2;\n        ObjectUnionCompositePointer.ITriangle v3 = 3;\n        ObjectUnionCompositePointer.IRectangle v4 = 4;\n        ObjectUnionCompositePointer.IPolyline v5 = 5;\n        ObjectUnionCompositePointer.IPointedShape v6 = 6;\n        ObjectUnionCompositePointer.IPolygon v7 = 7;\n        ObjectUnionCompositePointer.ICircle v8 = 8;\n    }\n}',
        decode: (input: Uint8Array): ObjectUnionCompositePointer => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: [] as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // type: Array<IPointer<IPoint | ILine | ITriangle | IRectangle | IPolyline | IPolygon | IPointedShape | ICircle>>;
                            output.value.push($pdo1(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo1 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    value: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // ObjectUnionCompositePointer.IPoint;
                            output.value = $pdo2(reader, reader.uint32());
                            break;
                        case 2:
                            // ObjectUnionCompositePointer.ILine;
                            output.value = $pdo3(reader, reader.uint32());
                            break;
                        case 3:
                            // ObjectUnionCompositePointer.ITriangle;
                            output.value = $pdo4(reader, reader.uint32());
                            break;
                        case 4:
                            // ObjectUnionCompositePointer.IRectangle;
                            output.value = $pdo5(reader, reader.uint32());
                            break;
                        case 5:
                            // ObjectUnionCompositePointer.IPolyline;
                            output.value = $pdo6(reader, reader.uint32());
                            break;
                        case 6:
                            // ObjectUnionCompositePointer.IPointedShape;
                            output.value = $pdo8(reader, reader.uint32());
                            break;
                        case 7:
                            // ObjectUnionCompositePointer.IPolygon;
                            output.value = $pdo7(reader, reader.uint32());
                            break;
                        case 8:
                            // ObjectUnionCompositePointer.ICircle;
                            output.value = $pdo9(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo2 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    x: undefined as any,
                    y: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // number;
                            output.x = reader.double();
                            break;
                        case 2:
                            // number;
                            output.y = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo3 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    p1: undefined as any,
                    p2: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // ObjectUnionCompositePointer.IPoint;
                            output.p1 = $pdo2(reader, reader.uint32());
                            break;
                        case 2:
                            // ObjectUnionCompositePointer.IPoint;
                            output.p2 = $pdo2(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo4 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    p1: undefined as any,
                    p2: undefined as any,
                    p3: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // ObjectUnionCompositePointer.IPoint;
                            output.p1 = $pdo2(reader, reader.uint32());
                            break;
                        case 2:
                            // ObjectUnionCompositePointer.IPoint;
                            output.p2 = $pdo2(reader, reader.uint32());
                            break;
                        case 3:
                            // ObjectUnionCompositePointer.IPoint;
                            output.p3 = $pdo2(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo5 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    p1: undefined as any,
                    p2: undefined as any,
                    p3: undefined as any,
                    p4: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // ObjectUnionCompositePointer.IPoint;
                            output.p1 = $pdo2(reader, reader.uint32());
                            break;
                        case 2:
                            // ObjectUnionCompositePointer.IPoint;
                            output.p2 = $pdo2(reader, reader.uint32());
                            break;
                        case 3:
                            // ObjectUnionCompositePointer.IPoint;
                            output.p3 = $pdo2(reader, reader.uint32());
                            break;
                        case 4:
                            // ObjectUnionCompositePointer.IPoint;
                            output.p4 = $pdo2(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo6 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    points: [] as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // type: Array<ObjectUnionCompositePointer.IPoint>;
                            output.points.push($pdo2(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo7 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    outer: undefined as any,
                    inner: [] as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // ObjectUnionCompositePointer.IPolyline;
                            output.outer = $pdo6(reader, reader.uint32());
                            break;
                        case 2:
                            // type: Array<ObjectUnionCompositePointer.IPolyline>;
                            output.inner.push($pdo6(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo8 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    outer: [] as any,
                    inner: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // type: Array<ObjectUnionCompositePointer.IPoint>;
                            output.outer.push($pdo2(reader, reader.uint32()));
                            break;
                        case 2:
                            // ObjectUnionCompositePointer.IPoint;
                            output.inner = $pdo2(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const $pdo9 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    centroid: undefined as any,
                    radius: undefined as any,
                };
                while (reader.index() < length) {
                    const tag = reader.uint32();
                    switch (tag >>> 3) {
                        case 1:
                            // ObjectUnionCompositePointer.IPoint;
                            output.centroid = $pdo2(reader, reader.uint32());
                            break;
                        case 2:
                            // number;
                            output.radius = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                    }
                }
                return output;
            };
            const reader = new $Reader(input);
            return $pdo0(reader);
        },
    });
