import {
    $proto_field_encode,
    $proto_field_wiretype,
} from "../../src/functional/$proto_field";
import {
    $proto_size_bytes,
    $proto_size_field,
    $proto_size_varint,
} from "../../src/functional/$proto_size";
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

function $size_IBox3D(o: ObjectSimple.IPoint3D): number {
    const size =
        $proto_size_field(1, $proto_field_wiretype.VARINT) +
        $proto_size_varint(o.x) +
        $proto_size_field(2, $proto_field_wiretype.VARINT) +
        $proto_size_varint(o.y) +
        $proto_size_field(3, $proto_field_wiretype.VARINT) +
        $proto_size_varint(o.z);
    return size;
}

function $encode_IBox3D(
    dst: Uint8Array,
    offset: number,
    o: ObjectSimple.IPoint3D,
): number {
    offset = $proto_field_encode(dst, offset, 1, $proto_field_wiretype.VARINT);
    offset = $varint_encode(dst, offset, o.x);

    offset = $proto_field_encode(dst, offset, 2, $proto_field_wiretype.VARINT);
    offset = $varint_encode(dst, offset, o.y);

    offset = $proto_field_encode(dst, offset, 3, $proto_field_wiretype.VARINT);
    offset = $varint_encode(dst, offset, o.z);

    return offset;
}

function $size_ObjectSimple(o: ObjectSimple): number {
    const size =
        $proto_size_field(1, $proto_field_wiretype.LEN) +
        $proto_size_bytes($size_IBox3D(o.scale)) +
        $proto_size_field(2, $proto_field_wiretype.LEN) +
        $proto_size_bytes($size_IBox3D(o.position)) +
        $proto_size_field(3, $proto_field_wiretype.LEN) +
        $proto_size_bytes($size_IBox3D(o.rotate)) +
        $proto_size_field(4, $proto_field_wiretype.LEN) +
        $proto_size_bytes($size_IBox3D(o.pivot));
    return size;
}

function $encode_ObjectSimple(
    dst: Uint8Array,
    offset: number,
    o: ObjectSimple,
): number {
    offset = $proto_field_encode(dst, offset, 1, $proto_field_wiretype.LEN);
    offset = $varint_encode(dst, offset, $size_IBox3D(o.scale));
    offset = $encode_IBox3D(dst, offset, o.scale);

    offset = $proto_field_encode(dst, offset, 2, $proto_field_wiretype.LEN);
    offset = $varint_encode(dst, offset, $size_IBox3D(o.position));
    offset = $encode_IBox3D(dst, offset, o.position);

    offset = $proto_field_encode(dst, offset, 3, $proto_field_wiretype.LEN);
    offset = $varint_encode(dst, offset, $size_IBox3D(o.rotate));
    offset = $encode_IBox3D(dst, offset, o.rotate);

    offset = $proto_field_encode(dst, offset, 4, $proto_field_wiretype.LEN);
    offset = $varint_encode(dst, offset, $size_IBox3D(o.pivot));
    offset = $encode_IBox3D(dst, offset, o.pivot);

    return offset;
}

const buffer = new Uint8Array($size_ObjectSimple(testObject));
const offset = $encode_ObjectSimple(buffer, 0, testObject);

if (offset !== buffer.length) {
    throw new Error("offset !== buffer.length");
}

console.log(Hex(buffer));
