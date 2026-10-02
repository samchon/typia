// separate-statement default export of a from/new class (no Default modifier on
// the class declaration itself)
class Stamp {
  value!: number;
  private constructor(value: number) {
    this.value = value;
  }
  static from(seed: { value: number }): Stamp {
    const s = Object.create(Stamp.prototype) as Stamp;
    (s as { value: number }).value = seed.value;
    return s;
  }
}
export default Stamp;
