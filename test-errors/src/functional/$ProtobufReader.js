"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ProtobufReader = void 0;
/// @reference https://github.com/piotr-oles/as-proto/blob/main/packages/as-proto/assembly/internal/FixedReader.ts
class $ProtobufReader {
    /**
     * Read buffer
     */
    buf;
    /**
     * Read buffer pointer.
     */
    ptr;
    /**
     * DataView for buffer.
     */
    view;
    constructor(buf) {
        this.buf = buf;
        this.ptr = 0;
        this.view = new DataView(buf.buffer);
    }
    index() {
        return this.ptr;
    }
    size() {
        return this.buf.length;
    }
    uint32() {
        return this.varint32();
    }
    int32() {
        return this.varint32();
    }
    sint32() {
        const value = this.varint32();
        return (value >>> 1) ^ -(value & 1);
    }
    uint64() {
        return this.varint64();
    }
    int64() {
        return this.varint64();
    }
    sint64() {
        const value = this.varint64();
        return (value >> N01) ^ -(value & N01);
    }
    bool() {
        return this.varint32() !== 0;
    }
    float() {
        const value = this.view.getFloat32(this.ptr, true);
        this.ptr += 4;
        return value;
    }
    double() {
        const value = this.view.getFloat64(this.ptr, true);
        this.ptr += 8;
        return value;
    }
    bytes() {
        const length = this.uint32();
        const from = this.ptr;
        this.ptr += length;
        return this.buf.subarray(from, from + length);
    }
    string() {
        return utf8.decode(this.bytes());
    }
    skip(length) {
        if (length === 0)
            while (this.u8() & 0x80)
                ;
        else {
            if (this.index() + length > this.size())
                throw new Error("Error on typia.protobuf.decode(): buffer overflow.");
            this.ptr += length;
        }
    }
    skipType(wireType) {
        switch (wireType) {
            case 0 /* ProtobufWire.VARIANT */:
                this.skip(0);
                break;
            case 1 /* ProtobufWire.I64 */:
                this.skip(8);
                break;
            case 2 /* ProtobufWire.LEN */:
                this.skip(this.uint32());
                break;
            case 3 /* ProtobufWire.START_GROUP */:
                while ((wireType = this.uint32() & 0x07) !== 4 /* ProtobufWire.END_GROUP */)
                    this.skipType(wireType);
                break;
            case 5 /* ProtobufWire.I32 */:
                this.skip(4);
                break;
            default:
                throw new Error(`Invalid wire type ${wireType} at offset ${this.ptr}.`);
        }
    }
    varint32() {
        let loaded;
        let value;
        value = (loaded = this.u8()) & 0x7f;
        if (loaded < 0x80)
            return value;
        value |= ((loaded = this.u8()) & 0x7f) << 7;
        if (loaded < 0x80)
            return value;
        value |= ((loaded = this.u8()) & 0x7f) << 14;
        if (loaded < 0x80)
            return value;
        value |= ((loaded = this.u8()) & 0x7f) << 21;
        if (loaded < 0x80)
            return value;
        value |= ((loaded = this.u8()) & 0xf) << 28;
        if (loaded < 0x80)
            return value;
        // increment position until there is no continuation bit or until we read 10 bytes
        if (this.u8() < 0x80)
            return value;
        if (this.u8() < 0x80)
            return value;
        if (this.u8() < 0x80)
            return value;
        if (this.u8() < 0x80)
            return value;
        if (this.u8() < 0x80)
            return value;
        return value;
    }
    varint64() {
        let loaded;
        let value;
        value = (loaded = this.u8n()) & N7F;
        if (loaded < N80)
            return value;
        value |= ((loaded = this.u8n()) & N7F) << BigInt(7);
        if (loaded < N80)
            return value;
        value |= ((loaded = this.u8n()) & N7F) << BigInt(14);
        if (loaded < N80)
            return value;
        value |= ((loaded = this.u8n()) & N7F) << BigInt(21);
        if (loaded < N80)
            return value;
        value |= ((loaded = this.u8n()) & N7F) << BigInt(28);
        if (loaded < N80)
            return value;
        value |= ((loaded = this.u8n()) & N7F) << BigInt(35);
        if (loaded < N80)
            return value;
        value |= ((loaded = this.u8n()) & N7F) << BigInt(42);
        if (loaded < N80)
            return value;
        value |= ((loaded = this.u8n()) & N7F) << BigInt(49);
        if (loaded < N80)
            return value;
        value |= ((loaded = this.u8n()) & N7F) << BigInt(56);
        if (loaded < N80)
            return value;
        value |= (this.u8n() & N01) << BigInt(63);
        return BigInt.asIntN(64, value);
    }
    u8() {
        return this.view.getUint8(this.ptr++);
    }
    u8n() {
        return BigInt(this.u8());
    }
}
exports.$ProtobufReader = $ProtobufReader;
const utf8 = new TextDecoder();
const N01 = BigInt(0x01);
const N7F = BigInt(0x7f);
const N80 = BigInt(0x80);
