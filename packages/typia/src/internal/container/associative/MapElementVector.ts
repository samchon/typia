//================================================================

/**
 * @packageDocumentation
 * @module std.internal
 */
//================================================================
import { ITreeMap } from "../../../base/container/ITreeMap";
import { Entry } from "../../../utility/Entry";
import { IPair } from "../../../utility/IPair";
import { ArrayIteratorBase } from "../../iterator/ArrayIteratorBase";
import { ArrayReverseIteratorBase } from "../../iterator/ArrayReverseIteratorBase";
import { VectorContainer } from "../linear/VectorContainer";

/**
 * Vector storing map elements.
 *
 * @template Key Key type
 * @template T Mapped type
 * @template Unique Whether duplicated key is blocked or not
 * @template Source Source type
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class MapElementVector<
  Key,
  T,
  Unique extends boolean,
  Source extends ITreeMap<
    Key,
    T,
    Unique,
    Source,
    MapElementVector.Iterator<Key, T, Unique, Source>,
    MapElementVector.ReverseIterator<Key, T, Unique, Source>
  >,
> extends VectorContainer<
  Entry<Key, T>,
  Source,
  MapElementVector<Key, T, Unique, Source>,
  MapElementVector.Iterator<Key, T, Unique, Source>,
  MapElementVector.ReverseIterator<Key, T, Unique, Source>
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

  public nth(index: number): MapElementVector.Iterator<Key, T, Unique, Source> {
    return new MapElementVector.Iterator(this, index);
  }

  /**
   * @internal
   */
  public static _Swap_associative<
    Key,
    T,
    Unique extends boolean,
    Source extends ITreeMap<
      Key,
      T,
      Unique,
      Source,
      MapElementVector.Iterator<Key, T, Unique, Source>,
      MapElementVector.ReverseIterator<Key, T, Unique, Source>
    >,
  >(
    x: MapElementVector<Key, T, Unique, Source>,
    y: MapElementVector<Key, T, Unique, Source>,
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
export namespace MapElementVector {
  /**
   * Iterator of map container storing elements in a vector.
   *
   * @template Key Key type
   * @template T Mapped type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export class Iterator<
      Key,
      T,
      Unique extends boolean,
      Source extends ITreeMap<
        Key,
        T,
        Unique,
        Source,
        Iterator<Key, T, Unique, Source>,
        ReverseIterator<Key, T, Unique, Source>
      >,
    >
    extends ArrayIteratorBase<
      Entry<Key, T>,
      Source,
      MapElementVector<Key, T, Unique, Source>,
      Iterator<Key, T, Unique, Source>,
      ReverseIterator<Key, T, Unique, Source>,
      IPair<Key, T>
    >
    implements
      ITreeMap.Iterator<
        Key,
        T,
        Unique,
        Source,
        Iterator<Key, T, Unique, Source>,
        ReverseIterator<Key, T, Unique, Source>
      >
  {
    /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    public source(): Source {
      return this._Get_array().source();
    }

    /**
     * @inheritDoc
     */
    public reverse(): ReverseIterator<Key, T, Unique, Source> {
      return new ReverseIterator(this);
    }

    /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    public get first(): Key {
      return this.value.first;
    }

    /**
     * @inheritDoc
     */
    public get second(): T {
      return this.value.second;
    }

    /**
     * @inheritDoc
     */
    public set second(val: T) {
      this.value.second = val;
    }
  }

  /**
   * Reverse iterator of map container storing elements in a vector.
   *
   * @template Key Key type
   * @template T Mapped type
   * @template Unique Whether duplicated key is blocked or not
   * @template Source Source container type
   *
   * @author Jeongho Nam - https://github.com/samchon
   */
  export class ReverseIterator<
      Key,
      T,
      Unique extends boolean,
      Source extends ITreeMap<
        Key,
        T,
        Unique,
        Source,
        Iterator<Key, T, Unique, Source>,
        ReverseIterator<Key, T, Unique, Source>
      >,
    >
    extends ArrayReverseIteratorBase<
      Entry<Key, T>,
      Source,
      MapElementVector<Key, T, Unique, Source>,
      Iterator<Key, T, Unique, Source>,
      ReverseIterator<Key, T, Unique, Source>,
      IPair<Key, T>
    >
    implements
      ITreeMap.ReverseIterator<
        Key,
        T,
        Unique,
        Source,
        Iterator<Key, T, Unique, Source>,
        ReverseIterator<Key, T, Unique, Source>
      >
  {
    /* ---------------------------------------------------------
            CONSTRUCTORS
        --------------------------------------------------------- */
    protected _Create_neighbor(
      base: Iterator<Key, T, Unique, Source>,
    ): ReverseIterator<Key, T, Unique, Source> {
      return new ReverseIterator(base);
    }

    /* ---------------------------------------------------------
            ACCESSORS
        --------------------------------------------------------- */
    /**
     * @inheritDoc
     */
    public get first(): Key {
      return this.value.first;
    }

    /**
     * @inheritDoc
     */
    public get second(): T {
      return this.value.second;
    }

    /**
     * @inheritDoc
     */
    public set second(val: T) {
      this.value.second = val;
    }
  }
}
