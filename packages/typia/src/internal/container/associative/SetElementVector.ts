//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { ITreeSet } from "../../../base/container/ITreeSet";
import { ArrayIteratorBase } from "../../iterator/ArrayIteratorBase";
import { ArrayReverseIteratorBase } from "../../iterator/ArrayReverseIteratorBase";
import { VectorContainer } from "../linear/VectorContainer";

/**
 * Vector storing set elements.
 *
 * @template Key Key type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Source type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class SetElementVector<
  Key,
  Unique extends boolean,
  Source extends ITreeSet<
    Key,
    Unique,
    Source,
    SetElementVector.Iterator<Key, Unique, Source>,
    SetElementVector.ReverseIterator<Key, Unique, Source>
  >,
> extends VectorContainer<
  Key,
  Source,
  SetElementVector<Key, Unique, Source>,
  SetElementVector.Iterator<Key, Unique, Source>,
  SetElementVector.ReverseIterator<Key, Unique, Source>
> {
  private associative_: Source;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  public constructor(associative: Source) {
    super();

    this.data_ = [];
    this.associative_ = associative;
  }

  public nth(index: number): SetElementVector.Iterator<Key, Unique, Source> {
    return new SetElementVector.Iterator(this, index);
  }

  /**
   * @internal
   */
  public static _Swap_associative<
    Key,
    Unique extends boolean,
    Source extends ITreeSet<
      Key,
      Unique,
      Source,
      SetElementVector.Iterator<Key, Unique, Source>,
      SetElementVector.ReverseIterator<Key, Unique, Source>
    >,
  >(
    x: SetElementVector<Key, Unique, Source>,
    y: SetElementVector<Key, Unique, Source>,
  ): void {
    [x.associative_, y.associative_] = [y.associative_, x.associative_];
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  public source(): Source {
    return this.associative_;
  }
}

/**
 *
 */
export namespace SetElementVector {
  /**
   * Iterator of set container storing elements in a vector.
   *
   * @template Key Key type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export class Iterator<
      Key,
      Unique extends boolean,
      Source extends ITreeSet<
        Key,
        Unique,
        Source,
        SetElementVector.Iterator<Key, Unique, Source>,
        SetElementVector.ReverseIterator<Key, Unique, Source>
      >,
    >
    extends ArrayIteratorBase<
      Key,
      Source,
      SetElementVector<Key, Unique, Source>,
      SetElementVector.Iterator<Key, Unique, Source>,
      SetElementVector.ReverseIterator<Key, Unique, Source>,
      Key
    >
    implements
      ITreeSet.Iterator<
        Key,
        Unique,
        Source,
        SetElementVector.Iterator<Key, Unique, Source>,
        SetElementVector.ReverseIterator<Key, Unique, Source>
      >
  {
    /**
     * @inheritDoc
     */
    public source(): Source {
      return this._Get_array().source();
    }

    /**
     * @inheritDoc
     */
    public reverse(): ReverseIterator<Key, Unique, Source> {
      return new ReverseIterator(this);
    }
  }

  /**
   * Reverse iterator of set container storing elements in a vector.
   *
   * @template Key Key type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export class ReverseIterator<
      Key,
      Unique extends boolean,
      Source extends ITreeSet<
        Key,
        Unique,
        Source,
        SetElementVector.Iterator<Key, Unique, Source>,
        SetElementVector.ReverseIterator<Key, Unique, Source>
      >,
    >
    extends ArrayReverseIteratorBase<
      Key,
      Source,
      SetElementVector<Key, Unique, Source>,
      SetElementVector.Iterator<Key, Unique, Source>,
      SetElementVector.ReverseIterator<Key, Unique, Source>,
      Key
    >
    implements
      ITreeSet.ReverseIterator<
        Key,
        Unique,
        Source,
        SetElementVector.Iterator<Key, Unique, Source>,
        SetElementVector.ReverseIterator<Key, Unique, Source>
      >
  {
    protected _Create_neighbor(
      base: Iterator<Key, Unique, Source>,
    ): ReverseIterator<Key, Unique, Source> {
      return new ReverseIterator(base);
    }
  }
}
