//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { SetContainer } from "../../../base/container/SetContainer";
import { ListIterator } from "../../iterator/ListIterator";
import { ReverseIterator as _ReverseIterator } from "../../iterator/ReverseIterator";
import { ListContainer } from "../linear/ListContainer";

/**
 * Doubly Linked List storing set elements.
 *
 * @template Key Key type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Source container type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class SetElementList<
  Key,
  Unique extends boolean,
  Source extends SetContainer<
    Key,
    Unique,
    Source,
    SetElementList.Iterator<Key, Unique, Source>,
    SetElementList.ReverseIterator<Key, Unique, Source>
  >,
> extends ListContainer<
  Key,
  Source,
  SetElementList.Iterator<Key, Unique, Source>,
  SetElementList.ReverseIterator<Key, Unique, Source>
> {
  private associative_: Source;

  /* ---------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------- */
  public constructor(associative: Source) {
    super();

    this.associative_ = associative;
  }

  protected _Create_iterator(
    prev: SetElementList.Iterator<Key, Unique, Source>,
    next: SetElementList.Iterator<Key, Unique, Source>,
    val: Key,
  ): SetElementList.Iterator<Key, Unique, Source> {
    return SetElementList.Iterator.create(this, prev, next, val);
  }

  /**
   * @internal
   */
  public static _Swap_associative<
    Key,
    Unique extends boolean,
    Source extends SetContainer<
      Key,
      Unique,
      Source,
      SetElementList.Iterator<Key, Unique, Source>,
      SetElementList.ReverseIterator<Key, Unique, Source>
    >,
  >(
    x: SetElementList<Key, Unique, Source>,
    y: SetElementList<Key, Unique, Source>,
  ): void {
    [x.associative_, y.associative_] = [y.associative_, x.associative_];
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  public associative(): Source {
    return this.associative_;
  }
}

/**
 *
 */
export namespace SetElementList {
  /**
   * Iterator of set container storing elements in a list.
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
      Source extends SetContainer<
        Key,
        Unique,
        Source,
        Iterator<Key, Unique, Source>,
        ReverseIterator<Key, Unique, Source>
      >,
    >
    extends ListIterator<
      Key,
      Source,
      Iterator<Key, Unique, Source>,
      ReverseIterator<Key, Unique, Source>,
      Key
    >
    implements
      SetContainer.Iterator<
        Key,
        Unique,
        Source,
        Iterator<Key, Unique, Source>,
        ReverseIterator<Key, Unique, Source>
      >
  {
    private source_: SetElementList<Key, Unique, Source>;

    /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
    private constructor(
      list: SetElementList<Key, Unique, Source>,
      prev: Iterator<Key, Unique, Source>,
      next: Iterator<Key, Unique, Source>,
      val: Key,
    ) {
      super(prev, next, val);
      this.source_ = list;
    }

    /**
     * @internal
     */
    public static create<
      Key,
      Unique extends boolean,
      Source extends SetContainer<
        Key,
        Unique,
        Source,
        Iterator<Key, Unique, Source>,
        ReverseIterator<Key, Unique, Source>
      >,
    >(
      list: SetElementList<Key, Unique, Source>,
      prev: Iterator<Key, Unique, Source>,
      next: Iterator<Key, Unique, Source>,
      val: Key,
    ) {
      return new Iterator(list, prev, next, val);
    }

    /**
     * @inheritDoc
     */
    public reverse(): ReverseIterator<Key, Unique, Source> {
      return new ReverseIterator(this);
    }

    /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    public source(): Source {
      return this.source_.associative();
    }
  }

  /**
   * Reverser iterator of set container storing elements in a list.
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
      Source extends SetContainer<
        Key,
        Unique,
        Source,
        Iterator<Key, Unique, Source>,
        ReverseIterator<Key, Unique, Source>
      >,
    >
    extends _ReverseIterator<
      Key,
      Source,
      Iterator<Key, Unique, Source>,
      ReverseIterator<Key, Unique, Source>,
      Key
    >
    implements
      SetContainer.ReverseIterator<
        Key,
        Unique,
        Source,
        Iterator<Key, Unique, Source>,
        ReverseIterator<Key, Unique, Source>
      >
  {
    protected _Create_neighbor(
      base: Iterator<Key, Unique, Source>,
    ): ReverseIterator<Key, Unique, Source> {
      return new ReverseIterator(base);
    }
  }
}
