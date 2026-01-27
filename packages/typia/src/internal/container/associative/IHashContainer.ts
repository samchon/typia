//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { IContainer } from "../../../base/container/IContainer";
import { equal_to } from "../../../functional/comparators";
import { hash } from "../../../functional/hash";
import { BinaryPredicator } from "../../functional/BinaryPredicator";
import { Hasher } from "../../functional/Hasher";
import { IAssociativeContainer } from "./IAssociativeContainer";

/**
 * Common interface for hash containers
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHashContainer<
  Key,
  T extends Elem,
  SourceT extends IHashContainer<
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
> extends IAssociativeContainer<
    Key,
    T,
    SourceT,
    IteratorT,
    ReverseIteratorT,
    Elem
  > {
  /* ---------------------------------------------------------
        PREDICATORS
    --------------------------------------------------------- */
  /**
   * Get hash function.
   *
   * @return The hash function.
   */
  hash_function(): Hasher<Key>;

  /**
   * Get key equality predicator.
   *
   * @return The key equality predicator.
   */
  key_eq(): BinaryPredicator<Key>;

  /* ---------------------------------------------------------
        GETTERS
    --------------------------------------------------------- */
  /**
   * Compute bucket index for the *key*.
   *
   * @param key Target key.
   * @return Index number.
   */
  bucket(key: Key): number;

  /**
   * Get number of buckets.
   */
  bucket_count(): number;

  /**
   * Get size of a specific bucket.
   *
   * @param index Specific position.
   * @return Size of the specific bucket.
   */
  bucket_size(index: number): number;

  /**
   * Compute load factor.
   *
   * @return `this.size() / this.bucket_count()`
   */
  load_factor(): number;

  /**
   * Get maximum load factor that allowable.
   *
   * @return The maximum load factor.
   */
  max_load_factor(): number;

  /* ---------------------------------------------------------
        SETTERS
    --------------------------------------------------------- */
  /**
   * Set maximum load factor.
   *
   * @param z The new value to change.
   */
  max_load_factor(z: number): void;

  /**
   * Reserve buckets enable to store *n* elements.
   *
   * @param n The capacity to reserve.
   */
  reserve(n: number): void;

  /**
   * Change of bucktes.
   *
   * @param n The number to change.
   */
  rehash(n: number): void;
}

export namespace IHashContainer {
  /**
   * @internal
   */
  export function construct<
    Key,
    T extends Elem,
    SourceT extends IHashContainer<
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
  >(
    source: SourceT,
    Source: Factory<SourceT>,
    bucketFactory: (
      hasher: Hasher<Key>,
      predicator: BinaryPredicator<Key>,
    ) => void,
    ...args: any[]
  ) {
    // DECLARE MEMBERS
    let post_process: (() => void) | null = null;
    let hash_function: Hasher<Key> = hash;
    let key_eq: BinaryPredicator<Key> = equal_to;

    //----
    // INITIALIZE MEMBERS AND POST-PROCESS
    //----
    // BRANCH - METHOD OVERLOADINGS
    if (args.length === 1 && args[0] instanceof Source) {
      // PARAMETERS
      const container: SourceT = args[0];
      hash_function = container.hash_function();
      key_eq = container.key_eq();

      // COPY CONSTRUCTOR
      post_process = () => {
        const first = container.begin();
        const last = container.end();

        source.assign(first, last);
      };
    } else {
      const tuple = IAssociativeContainer.construct(source, ...args);

      post_process = tuple.ramda;
      if (tuple.tail.length >= 1) hash_function = tuple.tail[0];
      if (tuple.tail.length >= 2) key_eq = tuple.tail[1];
    }

    //----
    // DO PROCESS
    //----
    // CONSTRUCT BUCKET
    bucketFactory(hash_function, key_eq);

    // ACT POST-PROCESS
    if (post_process !== null) post_process();
  }

  /**
   * @internal
   */
  interface Factory<T, Arguments extends any[] = any[]> {
    new (...args: Arguments): T;
    prototype: T;
  }
}
