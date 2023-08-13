export class $BufferWritter {
    public readonly buffer: Uint8Array;
    private readonly view_: DataView;
    private offset_: number;

    public constructor(public readonly length: number) {
        this.buffer = new Uint8Array(length);
        this.view_ = new DataView(this.buffer.buffer, 0, length);
        this.offset_ = 0;
    }

    public writeInt32(value: number): void {
        this.view_.setInt32(this.offset_, value, true);
        this.offset_ += 4;
    }

    public writeUint32(value: number): void {
        this.view_.setUint32(this.offset_, value, true);
        this.offset_ += 4;
    }

    public writeInt64(value: bigint | number): void {
        this.view_.setBigInt64(this.offset_, BigInt(value), true);
        this.offset_ += 8;
    }

    public writeUint64(value: bigint | number): void {
        this.view_.setBigUint64(this.offset_, BigInt(value), true);
        this.offset_ += 8;
    }

    public writeFloat32(value: number): void {
        this.view_.setFloat32(this.offset_, value, true);
        this.offset_ += 4;
    }

    public writeFloat64(value: number): void {
        this.view_.setFloat64(this.offset_, value, true);
        this.offset_ += 8;
    }

    public writeString(value: string): void {
        const bytes: Uint8Array = encoder.encode(value);
        this.writeBytes(bytes);
    }

    public writeBytes(value: Uint8Array): void {
        this.buffer.set(value, this.offset_);
        this.offset_ += value.length;
    }
}

const encoder: TextEncoder = new TextEncoder();
