export namespace Foo {
  /**
   * GAMMA type: a real namespace member whose full name is exactly `Foo.o1`.
   *
   * The member name `o1` is not contrived decoration. It is the shape the
   * collection's own disambiguator mints for a duplicate `Foo`, so this type
   * proves whether an invented id can squat a name a real type already owns.
   */
  export interface o1 {
    c: boolean;
  }
}
