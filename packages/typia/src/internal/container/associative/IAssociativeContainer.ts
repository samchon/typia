//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IContainer } from "../../../base/container/IContainer";

/**
 * Common interface for associative containers
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IAssociativeContainer<
  Key,
  T extends Elem,
  SourceT extends IAssociativeContainer<
    Key,
    T,
    SourceT,
    IteratorT,
    ReverseIteratorT,
    Elem
  >,
  IteratorT extends IContainer.Iterator<
    T,
    SourceT,
    IteratorT,
    ReverseIteratorT,
    Elem
  >,
  ReverseIteratorT extends IContainer.ReverseIterator<
    T,
    SourceT,
    IteratorT,
    ReverseIteratorT,
    Elem
  >,
  Elem,
> extends IContainer<T, SourceT, IteratorT, ReverseIteratorT, Elem> {
  /**
   * Get iterator to element.
   *
   * @param key Key to search for.
   * @return An iterator to the element, if the specified key is found, otherwise `this.end()`.
   */
  find(key: Key): IteratorT;

  /**
   * Test whether a key exists.
   *
   * @param key Key to search for.
   * @return Whether the specified key exists.
   */
  has(key: Key): boolean;

  /**
   * Count elements with a specified key.
   *
   * @param key Key to search for.
   * @return Number of elements with the specified key.
   */
  count(key: Key): number;

  /**
   * Erase elements with a specified key.
   *
   * @param key Key to search for.
   * @return Number of erased elements.
   */
  erase(key: Key): number;

  /**
   * @inheritDoc
   */
  erase(pos: IteratorT): IteratorT;

  /**
   * @inheritDoc
   */
  erase(first: IteratorT, last: IteratorT): IteratorT;
}

export namespace IAssociativeContainer {
  /**
   * @internal
   */
  export function construct<
    Key,
    T extends Elem,
    SourceT extends IAssociativeContainer<
      Key,
      T,
      SourceT,
      IteratorT,
      ReverseIteratorT,
      Elem
    >,
    IteratorT extends IContainer.Iterator<
      T,
      SourceT,
      IteratorT,
      ReverseIteratorT,
      Elem
    >,
    ReverseIteratorT extends IContainer.ReverseIterator<
      T,
      SourceT,
      IteratorT,
      ReverseIteratorT,
      Elem
    >,
    Elem,
  >(source: SourceT, ...args: any[]) {
    let ramda: (() => void) | null;
    let tail: any[];

    if (args.length >= 1 && args[0] instanceof Array) {
      // INITIALIZER LIST CONSTRUCTOR
      ramda = () => {
        const items: Elem[] = args[0];
        source.push(...items);
      };
      tail = args.slice(1);
    } else if (
      args.length >= 2 &&
      args[0].next instanceof Function &&
      args[1].next instanceof Function
    ) {
      // RANGE CONSTRUCTOR
      ramda = () => {
        const first: IteratorT = args[0];
        const last: IteratorT = args[1];

        source.assign(first, last);
      };
      tail = args.slice(2);
    } else {
      // DEFAULT CONSTRUCTOR
      ramda = null;
      tail = args;
    }

    return { ramda: ramda, tail: tail };
  }
}
