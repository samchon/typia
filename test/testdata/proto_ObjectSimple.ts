import { $proto_bytes_encode } from "../../src/functional/$proto_bytes";
import {
    $proto_field_encode,
    $proto_field_wiretype,
} from "../../src/functional/$proto_field";
import { $varint_encode } from "../../src/functional/$varint";

import { Hex } from "../internal/Hex";
import { ObjectSimple } from "../structures/ObjectSimple";

const testObject: ObjectSimple = {
    scale: {
        x: -123,
        y: -456,
        z: -789,
    },
    position: {
        x: 123,
        y: 456,
        z: 789,
    },
    rotate: {
        x: 0,
        y: 1,
        z: 2,
    },
    pivot: {
        x: -100,
        y: -200,
        z: -300,
    },
};

function encode_IBox3D(o: ObjectSimple.IPoint3D): Uint8Array {
    const buffer = new Uint8Array(1024); // TODO: calculate size
    let offset = 0;

    offset = $proto_field_encode(
        buffer,
        offset,
        1,
        $proto_field_wiretype.VARINT,
    );
    offset = $varint_encode(buffer, offset, o.x);

    offset = $proto_field_encode(
        buffer,
        offset,
        2,
        $proto_field_wiretype.VARINT,
    );
    offset = $varint_encode(buffer, offset, o.y);

    offset = $proto_field_encode(
        buffer,
        offset,
        3,
        $proto_field_wiretype.VARINT,
    );
    offset = $varint_encode(buffer, offset, o.z);

    return buffer.subarray(0, offset);
}

function encode_ObjectSimple(o: ObjectSimple): Uint8Array {
    const buffer = new Uint8Array(1024); // TODO: calculate size
    let offset = 0;

    offset = $proto_field_encode(buffer, offset, 1, $proto_field_wiretype.LEN);
    const scale = encode_IBox3D(o.scale);
    offset = $proto_bytes_encode(buffer, offset, scale);

    offset = $proto_field_encode(buffer, offset, 2, $proto_field_wiretype.LEN);
    const position = encode_IBox3D(o.position);
    offset = $proto_bytes_encode(buffer, offset, position);

    offset = $proto_field_encode(buffer, offset, 3, $proto_field_wiretype.LEN);
    const rotate = encode_IBox3D(o.rotate);
    offset = $proto_bytes_encode(buffer, offset, rotate);

    offset = $proto_field_encode(buffer, offset, 4, $proto_field_wiretype.LEN);
    const pivot = encode_IBox3D(o.pivot);
    offset = $proto_bytes_encode(buffer, offset, pivot);

    return buffer.subarray(0, offset);
}

// Print the result
console.log(Hex(encode_ObjectSimple(testObject)));
