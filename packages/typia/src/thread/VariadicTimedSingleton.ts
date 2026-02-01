import { HashMap } from "../container/HashMap";
import { hash } from "../functional/hash";
import { equal } from "../ranges/algorithm/iterations";
import { TimedSingleton } from "./TimedSingleton";

/**
 * Variadic timed singleton generator.
 *
 * The `VariadicTimedSingleton` is a type of {@link VariadicSingleton} class who re-constructs
 * the singleton value repeatedly whenever specific time has been elapsed after the last lazy
 * construction.
 *
 * @template T Type of the value to be lazy-constructed
 * @template Args Type of parameters of the lazy constructor function
 * @author Jeongho Nam - https://github.com/samchon
 */
export class VariadicTimedSingleton<T, Args extends any[]> {
  private readonly interval_: number;
  private readonly closure_: (...args: Args) => T;
  private readonly dict_: HashMap<Args, TimedSingleton<T, Args>>;

  /**
   * Initializer Constructor.
   *
   * @param interval Specific interval time, to determine whether re-generation of the singleton value is required or not, as milliseconds
   * @param closure Lazy constructor function returning the target value
   * @param hasher Hash function for the *lazy constructor* function arguments
   * @param pred Predicator function for the *lazy constructor* function arguments
   */
  public constructor(
    interval: number,
    closure: (...args: Args) => T,
    hasher: (args: Args) => number = (args) => hash(...args),
    pred: (x: Args, y: Args) => boolean = equal,
  ) {
    this.interval_ = interval;
    this.closure_ = closure;
    this.dict_ = new HashMap(hasher, pred);
  }

  /**
   * Get value.
   *
   * @param args Parameters for the lazy constructor function
   * @returns The lazy constructed value
   */
  public get(...args: Args): T {
    let it: HashMap.Iterator<Args, TimedSingleton<T, Args>> = this.dict_.find(
      args,
    );
    if (it.equals(this.dict_.end()) == true) {
      const singleton: TimedSingleton<T, Args> = new TimedSingleton(
        this.interval_,
        this.closure_,
      );
      it = this.dict_.emplace(args, singleton).first;
    }
    return it.second.get(...args);
  }
}
