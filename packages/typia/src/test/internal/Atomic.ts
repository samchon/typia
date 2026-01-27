import * as std from "../../index";

export class Atomic<T> implements std.IPointer<T>, std.IComparable<Atomic<T>> {
  public value: T;

  public constructor(value: T) {
    this.value = value;
  }

  public equals(obj: Atomic<T>): boolean {
    return std.equal_to(this.value, obj.value);
  }

  public less(obj: Atomic<T>): boolean {
    return std.less(this.value, obj.value);
  }
  public hashCode(): number {
    return std.hash(this.value);
  }
}
