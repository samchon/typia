import { ProtobufWire } from "../programmers/helpers/ProtobufWire";

/// @reference https://github.com/piotr-oles/as-proto/blob/main/packages/as-proto/assembly/internal/FixedReader.ts
export class $ProtobufReader {
    /**
     * Read buffer
     */
    private buf: Uint8Array;

    /**
     * Read buffer pointer.
     */
    private ptr: number;

    /**
     * DataView for buffer.
     */
    private view: DataView;

    public constructor(buf: Uint8Array) {
        this.buf = buf;
        this.ptr = 0;
        this.view = new DataView(buf.buffer);
    }

    public index(): number {
        return this.ptr;
    }

    public size(): number {
        return this.buf.length;
    }

    public uint32(): number {
        return this.varint32();
    }

    public int32(): number {
        return this.varint32();
    }

    public sint32(): number {
        const value: number = this.varint32();
        return (value >>> 1) ^ -(value & 1);
    }

    public uint64(): bigint {
        return this.varint64();
    }

    public int64(): bigint {
        return this.varint64();
    }

    public sint64(): bigint {
        const value = this.varint64();
        return (value >> N01) ^ -(value & N01);
    }

    public bool(): boolean {
        return this.varint32() !== 0;
    }

    public float(): number {
        const value: number = this.view.getFloat32(this.ptr, true);
        this.ptr += 4;
        return value;
    }

    public double(): number {
        const value: number = this.view.getFloat64(this.ptr, true);
        this.ptr += 8;
        return value;
    }

    public bytes(): Uint8Array {
        const length: number = this.uint32();
        const from: number = this.ptr;
        this.ptr += length;
        return this.buf.subarray(from, from + length);
    }

    public string(): string {
        return utf8.decode(this.bytes());
    }

    public skip(length: number): void {
        if (length === 0) while (this.u8() & 0x80);
        else {
            if (this.index() + length > this.size())
                throw new Error(
                    "Error on typia.protobuf.decode(): buffer overflow.",
                );
            this.ptr += length;
        }
    }

    public skipType(wireType: ProtobufWire): void {
        switch (wireType) {
            case ProtobufWire.VARIANT:
                this.skip(0);
                break;
            case ProtobufWire.I64:
                this.skip(8);
                break;
            case ProtobufWire.LEN:
                this.skip(this.uint32());
                break;
            case ProtobufWire.START_GROUP:
                while (
                    (wireType = this.uint32() & 0x07) !== ProtobufWire.END_GROUP
                )
                    this.skipType(wireType);
                break;
            case ProtobufWire.I32:
                this.skip(4);
                break;
            default:
                throw new Error(
                    `Invalid wire type ${wireType} at offset ${this.ptr}.`,
                );
        }
    }

    private varint32(): number {
        let loaded: number;
        let value: number;

        value = (loaded = this.u8()) & 0x7f;
        if (loaded < 0x80) return value;

        value |= ((loaded = this.u8()) & 0x7f) << 7;
        if (loaded < 0x80) return value;

        value |= ((loaded = this.u8()) & 0x7f) << 14;
        if (loaded < 0x80) return value;

        value |= ((loaded = this.u8()) & 0x7f) << 21;
        if (loaded < 0x80) return value;

        value |= ((loaded = this.u8()) & 0xf) << 28;
        if (loaded < 0x80) return value;

        // increment position until there is no continuation bit or until we read 10 bytes
        if (this.u8() < 0x80) return value;
        if (this.u8() < 0x80) return value;
        if (this.u8() < 0x80) return value;
        if (this.u8() < 0x80) return value;
        if (this.u8() < 0x80) return value;

        return value;
    }

    private varint64(): bigint {
        let loaded: bigint;
        let value: bigint;

        value = (loaded = this.u8n()) & N7F;
        if (loaded < N80) return value;

        value |= ((loaded = this.u8n()) & N7F) << BigInt(7);
        if (loaded < N80) return value;

        value |= ((loaded = this.u8n()) & N7F) << BigInt(14);
        if (loaded < N80) return value;

        value |= ((loaded = this.u8n()) & N7F) << BigInt(21);
        if (loaded < N80) return value;

        value |= ((loaded = this.u8n()) & N7F) << BigInt(28);
        if (loaded < N80) return value;

        value |= ((loaded = this.u8n()) & N7F) << BigInt(35);
        if (loaded < N80) return value;

        value |= ((loaded = this.u8n()) & N7F) << BigInt(42);
        if (loaded < N80) return value;

        value |= ((loaded = this.u8n()) & N7F) << BigInt(49);
        if (loaded < N80) return value;

        value |= ((loaded = this.u8n()) & N7F) << BigInt(56);
        if (loaded < N80) return value;

        value |= (this.u8n() & N01) << BigInt(63);
        return BigInt.asIntN(64, value);
    }

    private u8(): number {
        return this.view.getUint8(this.ptr++);
    }

    private u8n(): bigint {
        return BigInt(this.u8());
    }
}

const utf8 = new TextDecoder();
const N01 = BigInt(0x01);
const N7F = BigInt(0x7f);
const N80 = BigInt(0x80);
