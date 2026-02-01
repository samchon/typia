//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { pop_heap, push_heap } from "../algorithm/heap";
import { less } from "../functional/comparators";
import { AdaptorContainer } from "../internal/container/linear/AdaptorContainer";
import { Comparator } from "../internal/functional/Comparator";
import { IForwardIterator } from "../iterator/IForwardIterator";
import { Vector } from "./Vector";

/**
 * Priority Queue; Greater Out First.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class PriorityQueue<T> extends AdaptorContainer<
  T,
  Vector<T>,
  PriorityQueue<T>
> {
  private comp_: Comparator<T>;

  /* ---------------------------------------------------------
        CONSTURCTORS
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   *
   * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Note that, because *equality* is predicated by `!comp(x, y) && !comp(y, x)`, the function must not cover the *equality* like `<=` or `>=`. It must exclude the *equality* like `<` or `>`. Default is {@link less}.
   */
  public constructor(comp?: Comparator<T>);

  /**
   * Copy Constructor.
   *
   * @param obj Object to copy.
   */
  public constructor(obj: PriorityQueue<T>);

  /**
   * Range Constructor.
   *
   * @param first Input iterator of the first position.
   * @param last Input iterator of the last position.
   * @param comp A binary function predicates *x* element would be placed before *y*. When returns `true`, then *x* precedes *y*. Note that, because *equality* is predicated by `!comp(x, y) && !comp(y, x)`, the function must not cover the *equality* like `<=` or `>=`. It must exclude the *equality* like `<` or `>`. Default is {@link less}.
   */
  public constructor(
    first: Readonly<IForwardIterator<T>>,
    last: Readonly<IForwardIterator<T>>,
    comp?: Comparator<T>,
  );

  public constructor(...args: any[]) {
    super(new Vector());

    // DECLARE MEMBERS
    let comp: Comparator<T> = less;
    let post_process: (() => void) | null = null;

    //----
    // INITIALIZE MEMBERS AND POST-PROCESS
    //----
    // BRANCH - METHOD OVERLOADINGS
    if (args.length === 1 && args[0] instanceof PriorityQueue) {
      const obj: PriorityQueue<T> = args[0];

      comp = obj.comp_;
      post_process = () => {
        const first = obj.source_.begin();
        const last = obj.source_.end();

        this.source_.assign(first, last);
      };
    } else if (
      args.length >= 2 &&
      args[0].next instanceof Function &&
      args[1].next instanceof Function
    ) {
      // FUNCTION TEMPLATE
      if (args.length === 3) comp = args[2];

      post_process = () => {
        // RANGE CONSTRUCTOR
        const first: Readonly<IForwardIterator<T>> = args[0]; // PARAMETER 1
        const last: Readonly<IForwardIterator<T>> = args[1]; // PARAMETER 2

        this.source_.assign(first, last);
      };
    } else if (args.length === 1) comp = args[0];

    //----
    // DO PROCESS
    //----
    this.comp_ = comp;
    if (post_process !== null) post_process();
  }

  /* ---------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------- */
  /**
   * Get value comparison function.
   */
  public value_comp(): Comparator<T> {
    return this.comp_;
  }

  /**
   * Get top element.
   */
  public top(): T {
    return this.source_.front();
  }

  /* ---------------------------------------------------------
        ELEMENTS I/O
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public push(...elems: T[]): number {
    for (const elem of elems) {
      this.source_.push_back(elem);
      push_heap(this.source_.begin(), this.source_.end(), this.comp_);
    }
    return this.size();
  }

  /**
   * @inheritDoc
   */
  public pop(): void {
    pop_heap(this.source_.begin(), this.source_.end(), this.comp_);
    this.source_.pop_back();
  }

  /**
   * @inheritDoc
   */
  public swap(obj: PriorityQueue<T>): void {
    super.swap(obj);
    [this.comp_, obj.comp_] = [obj.comp_, this.comp_];
  }
}
