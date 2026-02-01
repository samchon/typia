//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { IArrayContainer } from "../base/container/IArrayContainer";
import { VectorContainer } from "../internal/container/linear/VectorContainer";
import { ArrayIterator } from "../internal/iterator/ArrayIterator";
import { ArrayReverseIterator } from "../internal/iterator/ArrayReverseIterator";
import { IForwardIterator } from "../iterator/IForwardIterator";

/**
 * Vector, an array with variable capacity.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class Vector<T>
  extends VectorContainer<
    T,
    Vector<T>,
    Vector<T>,
    Vector.Iterator<T>,
    Vector.ReverseIterator<T>
  >
  implements
    IArrayContainer<
      T,
      Vector<T>,
      Vector.Iterator<T>,
      Vector.ReverseIterator<T>
    >
{
  /* ---------------------------------------------------------
        CONSTURCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  public constructor();

  /**
   * Initializer Constructor.
   *
   * @param items Items to assign.
   */
  public constructor(items: Array<T>);

  /**
   * @internal
   */
  public constructor(items: Array<T>, move: true);

  /**
   * Copy Constructor
   *
   * @param obj Object to copy.
   */
  public constructor(obj: Vector<T>);

  /**
   * Fill Constructor.
   *
   * @param size Initial size.
   * @param val Value to fill.
   */
  public constructor(n: number, val: T);

  /**
   * Range Constructor.
   *
   * @param first Input iterator of the first position.
   * @param last Input iteartor of the last position.
   */
  public constructor(
    first: Readonly<IForwardIterator<T>>,
    last: Readonly<IForwardIterator<T>>,
  );

  public constructor(...args: any[]) {
    super();

    // CONSTRUCTORS BRANCH
    if (args.length === 0) {
      // DEFAULT CONSTRUCTOR
      this.data_ = [];
    } else if (args[0] instanceof Array) {
      // INITIALIZER CONSTRUCTOR
      const array: Array<T> = args[0];
      this.data_ = args[1] === true ? array : array.slice();
    } else if (args.length === 1 && args[0] instanceof Vector) {
      // COPY CONSTRUCTOR
      const v: Vector<T> = args[0];
      this.data_ = v.data_.slice();
    } else if (args.length === 2) {
      // ASSIGN CONSTRUCTOR
      this.data_ = [];
      this.assign(args[0], args[1]);
    }
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * Wrap an array into a vector.
   *
   * @param data Target array to be wrapped
   * @return A vector wrapping the parametric array.
   */
  public static wrap<T>(data: Array<T>): Vector<T> {
    return new Vector(data, true);
  }

  /**
   * @inheritDoc
   */
  public nth(index: number): Vector.Iterator<T> {
    return new Vector.Iterator(this as Vector<T>, index);
  }

  protected source(): Vector<T> {
    return this;
  }
}

/**
 *
 */
export namespace Vector {
  // HEAD
  /**
   * Iterator of {@link Vector}
   */
  export type Iterator<T> = ArrayIterator<T, Vector<T>>;

  /**
   * Reverse iterator of {@link Vector}
   */
  export type ReverseIterator<T> = ArrayReverseIterator<T, Vector<T>>;

  // BODY
  export const Iterator = ArrayIterator;
  export const ReverseIterator = ArrayReverseIterator;
}
