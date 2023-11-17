export interface IProtobufWriter {
  bool(value: boolean): void;
  int32(value: number): void;
  sint32(value: number): void;
  uint32(value: number): void;

  int64(value: bigint | number): void;
  sint64(value: bigint | number): void;
  uint64(value: bigint | number): void;

  float(value: number): void;
  double(value: number): void;
  bytes(value: Uint8Array): void;
  string(value: string): void;

  fork(): void;
  ldelim(): void;
}
