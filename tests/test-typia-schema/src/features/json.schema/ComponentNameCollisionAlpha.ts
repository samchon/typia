/**
 * ALPHA type: the first of three types whose generated component keys collide.
 *
 * The three fixtures deliberately live in separate files: two distinct types
 * must carry the identical declared name `Foo` for the collection to mint a
 * disambiguating id for the second one.
 */
export interface Foo {
  a: string;
}
