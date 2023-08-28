"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$ProtobufSizer = void 0;
const _strlen_1 = require("./$strlen");
/// @reference https://github.com/piotr-oles/as-proto/blob/main/packages/as-proto/assembly/internal/FixedSizer.ts
class $ProtobufSizer {
    /**
     * Total length.
     */
    len;
    /**
     * Position stack.
     */
    pos;
    /**
     * Variable length list.
     */
    varlen;
    /**
     * Variable length index stack.
     */
    varlenidx;
    constructor(length = 0) {
        this.len = length;
        this.pos = [];
        this.varlen = [];
        this.varlenidx = [];
    }
    bool() {
        this.len += 1;
    }
    int32(value) {
        if (value < 0) {
            // 10 bytes to encode negative number
            this.len += 10;
        }
        else {
            this.varint32(value);
        }
    }
    sint32(value) {
        this.varint32((value << 1) ^ (value >> 31));
    }
    uint32(value) {
        this.varint32(value);
    }
    int64(value) {
        this.varint64(typeof value === "number" ? BigInt(value) : value);
    }
    sint64(value) {
        if (typeof value === "number")
            value = BigInt(value);
        this.varint64((value << BigInt(1)) ^ (value >> BigInt(63)));
    }
    uint64(value) {
        this.varint64(typeof value === "number" ? BigInt(value) : value);
    }
    // public fixed32(_value: number): void {
    //     this.len += 4;
    // }
    // public sfixed32(_value: number): void {
    //     this.len += 4;
    // }
    // public fixed64(_value: number | bigint): void {
    //     this.len += 8;
    // }
    // public sfixed64(_value: number | bigint): void {
    //     this.len += 8;
    // }
    float(_value) {
        this.len += 4;
    }
    double(_value) {
        this.len += 8;
    }
    bytes(value) {
        this.uint32(value.byteLength);
        this.len += value.byteLength;
    }
    string(value) {
        const len = (0, _strlen_1.$strlen)(value);
        this.varlen.push(len);
        this.uint32(len);
        this.len += len;
    }
    fork() {
        this.pos.push(this.len); // save current position
        this.varlenidx.push(this.varlen.length); // save current index in varlen array
        this.varlen.push(0); // add 0 length to varlen array (to be updated in ldelim())
    }
    ldelim() {
        if (!(this.pos.length && this.varlenidx.length))
            throw new Error("Error on typia.protobuf.encode(): missing fork() before ldelim() call.");
        const endPos = this.len; // current position is end position
        const startPos = this.pos.pop(); // get start position from stack
        const idx = this.varlenidx.pop(); // get varlen index from stack
        const len = endPos - startPos; // calculate length
        this.varlen[idx] = len; // update variable length
        this.uint32(len); // add uint32 that should be called in fork()
    }
    reset() {
        this.len = 0;
        // re-use arrays
        this.pos.length = 0;
        this.varlen.length = 0;
        this.varlenidx.length = 0;
    }
    varint32(value) {
        this.len +=
            value < 0
                ? 10 // 10 bits with leading 1's
                : value < 0x80
                    ? 1
                    : value < 0x4000
                        ? 2
                        : value < 0x200000
                            ? 3
                            : value < 0x10000000
                                ? 4
                                : 5;
    }
    varint64(val) {
        val = BigInt.asUintN(64, val);
        while (val > NX7F) {
            ++this.len;
            val = val >> ND07;
        }
        ++this.len;
    }
}
exports.$ProtobufSizer = $ProtobufSizer;
const ND07 = BigInt(7);
const NX7F = BigInt(0x7f);
