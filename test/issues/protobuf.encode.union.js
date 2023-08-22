input => {
    const $throws = typia_1.default.protobuf.createEncode.throws;
    const $Sizer = typia_1.default.protobuf.createEncode.Sizer;
    const $Writer = typia_1.default.protobuf.createEncode.Writer;
    const encoder = writer => {
        const $peo0 = input => {
            // property "shape";
            if ("number" === typeof input.shape) {
                writer.uint32(9);
                writer.double(input.shape);
            }
            else if ("string" === typeof input.shape) {
                writer.uint32(18);
                writer.string(input.shape);
            }
            else if (input.shape instanceof Uint8Array) {
                writer.uint32(26);
                writer.bytes(input.shape);
            }
            else if ("object" === typeof input.shape && null !== input.shape) {
                if ("circle" === input.shape.type)
                    return (() => {
                        writer.uint32(34);
                        writer.fork();
                        $peo1(input.shape);
                        writer.ldelim();
                    })();
                else if ("triangle" === input.shape.type)
                    return (() => {
                        writer.uint32(42);
                        writer.fork();
                        $peo2(input.shape);
                        writer.ldelim();
                    })();
                else if ("point" === input.shape.type)
                    return (() => {
                        writer.uint32(50);
                        writer.fork();
                        $peo3(input.shape);
                        writer.ldelim();
                    })();
                else if ("rectangle" === input.shape.type)
                    return (() => {
                        writer.uint32(58);
                        writer.fork();
                        $peo4(input.shape);
                        writer.ldelim();
                    })();
                else
                    $throws({
                        expected: "(ICircle | IPolygon | IPoint | IRectangle)",
                        value: input.shape
                    });
            }
            else
                $throws({
                    expected: "(ICircle | IPoint | IPolygon | IRectangle | Uint8Array | number | string)",
                    value: input.shape
                });
        };
        const $peo1 = input => {
            // property "type";
            writer.uint32(10);
            writer.string(input.type);
            // property "radius";
            writer.uint32(17);
            writer.double(input.radius);
        };
        const $peo2 = input => {
            // property "type";
            writer.uint32(10);
            writer.string(input.type);
            // property "points";
            if (0 !== input.points.length) {
                for (const elem of input.points) {
                    writer.uint32(18);
                    writer.fork();
                    $peo3(elem);
                    writer.ldelim();
                }
            }
        };
        const $peo3 = input => {
            // property "type";
            writer.uint32(10);
            writer.string(input.type);
            // property "x";
            writer.uint32(17);
            writer.double(input.x);
            // property "y";
            writer.uint32(25);
            writer.double(input.y);
        };
        const $peo4 = input => {
            // property "type";
            writer.uint32(10);
            writer.string(input.type);
            // property "width";
            writer.uint32(17);
            writer.double(input.width);
            // property "height";
            writer.uint32(25);
            writer.double(input.height);
        };
        const $io1 = input => "circle" === input.type && "number" === typeof input.radius;
        const $io2 = input => "triangle" === input.type && (Array.isArray(input.points) && input.points.every(elem => "object" === typeof elem && null !== elem && $io3(elem)));
        const $io3 = input => "point" === input.type && "number" === typeof input.x && "number" === typeof input.y;
        const $io4 = input => "rectangle" === input.type && "number" === typeof input.width && "number" === typeof input.height;
        const $iu0 = input => (() => {
            if ("circle" === input.type)
                return $io1(input);
            else if ("triangle" === input.type)
                return $io2(input);
            else if ("point" === input.type)
                return $io3(input);
            else if ("rectangle" === input.type)
                return $io4(input);
            else
                return false;
        })();
        $peo0(input);
        return writer;
    };
    const sizer = encoder(new $Sizer());
    const writer = encoder(new $Writer(sizer));
    return writer.buffer();
}