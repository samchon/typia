//-----------------------------------------------
// ENCODER
//-----------------------------------------------
input => {
        const $throws = typia_1.default.protobuf.createEncode.throws;
        const $Sizer = typia_1.default.protobuf.createEncode.Sizer;
        const $Writer = typia_1.default.protobuf.createEncode.Writer;
        const encoder = writer => {
            const $peo0 = input => {
                // property "shape";
                if (undefined !== input.shape.radius)
                    return (() => {
                        // ICircle;
                        writer.uint32(10);
                        writer.fork();
                        $peo1(input.shape);
                        writer.ldelim();
                    })();
                else if (undefined !== input.shape.points)
                    return (() => {
                        // IPolygon;
                        writer.uint32(26);
                        writer.fork();
                        $peo3(input.shape);
                        writer.ldelim();
                    })();
                else if (undefined !== input.shape.p3)
                    return (() => {
                        // ITriangle;
                        writer.uint32(34);
                        writer.fork();
                        $peo4(input.shape);
                        writer.ldelim();
                    })();
                else
                    return (() => {
                        if (undefined !== input.shape.type)
                            return (() => {
                                // IPoint;
                                writer.uint32(18);
                                writer.fork();
                                $peo2(input.shape);
                                writer.ldelim();
                            })();
                        else if (undefined !== input.shape.p1)
                            return (() => {
                                // IRectangle;
                                writer.uint32(42);
                                writer.fork();
                                $peo5(input.shape);
                                writer.ldelim();
                            })();
                        else
                            $throws({
                                expected: "(IPoint | IRectangle)",
                                value: input.shape
                            });
                    })();
            };
            const $peo1 = input => {
                // property "radius";
                writer.uint32(9);
                writer.double(input.radius);
                // property "position";
                // IPoint;
                writer.uint32(18);
                writer.fork();
                $peo2(input.position);
                writer.ldelim();
            };
            const $peo2 = input => {
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
            const $peo3 = input => {
                // property "points";
                if (0 !== input.points.length) {
                    for (const elem of input.points) {
                        // IPoint;
                        writer.uint32(10);
                        writer.fork();
                        $peo2(elem);
                        writer.ldelim();
                    }
                }
            };
            const $peo4 = input => {
                // property "p1";
                // IPoint;
                writer.uint32(10);
                writer.fork();
                $peo2(input.p1);
                writer.ldelim();
                // property "p2";
                // IPoint;
                writer.uint32(18);
                writer.fork();
                $peo2(input.p2);
                writer.ldelim();
                // property "p3";
                // IPoint;
                writer.uint32(26);
                writer.fork();
                $peo2(input.p3);
                writer.ldelim();
                // property "type";
                writer.uint32(34);
                writer.string(input.type);
                // property "x";
                writer.uint32(41);
                writer.double(input.x);
                // property "y";
                writer.uint32(49);
                writer.double(input.y);
            };
            const $peo5 = input => {
                // property "p1";
                // IPoint;
                writer.uint32(10);
                writer.fork();
                $peo2(input.p1);
                writer.ldelim();
                // property "p2";
                // IPoint;
                writer.uint32(18);
                writer.fork();
                $peo2(input.p2);
                writer.ldelim();
            };
            const $io1 = input => "number" === typeof input.radius && ("object" === typeof input.position && null !== input.position && $io2(input.position));
            const $io2 = input => "point" === input.type && "number" === typeof input.x && "number" === typeof input.y;
            const $io3 = input => Array.isArray(input.points) && 3 <= input.points.length && input.points.every(elem => "object" === typeof elem && null !== elem && $io2(elem));
            const $io4 = input => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2)) && ("object" === typeof input.p3 && null !== input.p3 && $io2(input.p3)) && "point" === input.type && "number" === typeof input.x && "number" === typeof input.y;
            const $io5 = input => "object" === typeof input.p1 && null !== input.p1 && $io2(input.p1) && ("object" === typeof input.p2 && null !== input.p2 && $io2(input.p2));
            const $iu0 = input => (() => {
                if (undefined !== input.radius)
                    return $io1(input);
                else if (undefined !== input.points)
                    return $io3(input);
                else if (undefined !== input.p3)
                    return $io4(input);
                else
                    return (() => {
                        if (undefined !== input.type)
                            return $io2(input);
                        else if (undefined !== input.p1)
                            return $io5(input);
                        else
                            return false;
                    })();
            })();
            // IDocument;
            $peo0(input);
            return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
    }

//-----------------------------------------------
// DECODER
//-----------------------------------------------
input => {
        const $Reader = typia_1.default.protobuf.createDecode.Reader;
        const $pdo0 = (reader, length = -1) => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                shape: undefined
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // ICircle;
                        output.shape = $pdo1(reader, reader.uint32());
                        break;
                    case 2:
                        // IPoint;
                        output.shape = $pdo2(reader, reader.uint32());
                        break;
                    case 3:
                        // IPolygon;
                        output.shape = $pdo3(reader, reader.uint32());
                        break;
                    case 4:
                        // ITriangle;
                        output.shape = $pdo4(reader, reader.uint32());
                        break;
                    case 5:
                        // IRectangle;
                        output.shape = $pdo5(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const $pdo1 = (reader, length = -1) => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                radius: undefined,
                position: undefined
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // number;
                        output.radius = reader.double();
                        break;
                    case 2:
                        // IPoint;
                        output.position = $pdo2(reader, reader.uint32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const $pdo2 = (reader, length = -1) => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                type: undefined,
                x: undefined,
                y: undefined
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // string;
                        output.type = reader.string();
                        break;
                    case 2:
                        // number;
                        output.x = reader.double();
                        break;
                    case 3:
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
        const $pdo3 = (reader, length = -1) => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                points: []
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // type: Array<IPoint>;
                        output.points.push($pdo2(reader, reader.uint32()));
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                }
            }
            return output;
        };
        const $pdo4 = (reader, length = -1) => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                p1: undefined,
                p2: undefined,
                p3: undefined,
                type: undefined,
                x: undefined,
                y: undefined
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // IPoint;
                        output.p1 = $pdo2(reader, reader.uint32());
                        break;
                    case 2:
                        // IPoint;
                        output.p2 = $pdo2(reader, reader.uint32());
                        break;
                    case 3:
                        // IPoint;
                        output.p3 = $pdo2(reader, reader.uint32());
                        break;
                    case 4:
                        // string;
                        output.type = reader.string();
                        break;
                    case 5:
                        // number;
                        output.x = reader.double();
                        break;
                    case 6:
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
        const $pdo5 = (reader, length = -1) => {
            length = length < 0 ? reader.size() : reader.index() + length;
            const output = {
                p1: undefined,
                p2: undefined
            };
            while (reader.index() < length) {
                const tag = reader.uint32();
                switch (tag >>> 3) {
                    case 1:
                        // IPoint;
                        output.p1 = $pdo2(reader, reader.uint32());
                        break;
                    case 2:
                        // IPoint;
                        output.p2 = $pdo2(reader, reader.uint32());
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
    }