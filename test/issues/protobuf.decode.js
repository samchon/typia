(input) => {
    const $Reader = typia_1.default.protobuf.createDecode.Reader;
    const $pdo0 = (reader, length = -1) => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
            scale: {},
            position: {},
            rotate: {},
            pivot: {},
        };
        while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    output.scale = $pdo1(reader, reader.uint32());
                    break;
                case 2:
                    output.position = $pdo1(reader, reader.uint32());
                    break;
                case 3:
                    output.rotate = $pdo1(reader, reader.uint32());
                    break;
                case 4:
                    output.pivot = $pdo1(reader, reader.uint32());
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
            x: undefined,
            y: undefined,
            z: undefined,
        };
        while (reader.index() < length) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    output.x = reader.double();
                    break;
                case 2:
                    output.y = reader.double();
                    break;
                case 3:
                    output.z = reader.double();
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
};
