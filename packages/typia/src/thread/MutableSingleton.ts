//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { SharedLock } from "./SharedLock";
import { SharedMutex } from "./SharedMutex";
import { UniqueLock } from "./UniqueLock";

/**
 * Mutable singleton generator.
 *
 * The `MutableSingleton` is an asynchronous singleton generator class who guarantees the *lazy
 * constructor* to be called *"only one at time"*. The *"only one at time"* would always be
 * kepted, even in the race condition.
 *
 * Create a `MutableSingleton` instance with your custom *lazy constructor* and get the promised
 * value through the {@link MutableSingleton.get}() method. The {@link MutableSingleton.get}()
 * method would construct the return value following below logics:
 *
 *   - At the first time: calls the *lazy constructor* and returns the value.
 *   - After the *lazy construction*: returns the pre-constructed value.
 *   - Race condition:
 *     - simultaneously call happens during the *lazy construction*.
 *     - guarantees the *"only one at time"* through a *mutex*.
 *
 * If you want to reload the promised value, regardless of whether the *lazy construction* has
 * been completed or not, call the {@link MutableSingleton.reload}() method. It would call the
 * *lazy constructor* forcibly, even if the *lany construction* has been completed in sometime.
 *
 * @template T Type of the promised value to be lazy-constructed.
 * @author Jeongho Nam - https://github.com/samchon
 */
export class MutableSingleton<T, Args extends any[] = []> {
  /**
   * @hidden
   */
  private readonly closure_: (...args: Args) => Promise<T>;

  /**
   * @hidden
   */
  private readonly mutex_: SharedMutex;

  /**
   * @hidden
   */
  private value_: T | object;

  /* ---------------------------------------------------------------
        CONSTRUCTORS
    --------------------------------------------------------------- */
  /**
   * Initializer Constructor.
   *
   * Create a new `Singleton` instance with the *lazy consturctor*.
   *
   * @param closure Lazy constructor function returning the promised value.
   */
  public constructor(closure: (...args: Args) => Promise<T>) {
    this.closure_ = closure;
    this.mutex_ = new SharedMutex();
    this.value_ = NOT_MOUNTED_YET;
  }

  /**
   * Reload value.
   *
   * The `MutableSingleton.reload()` method enforces to call the *lazy constructor*, regardless
   * of whether the *lazy construction* has been completed or not. Therefore, even if the *lazy
   * construction* has been completed in sometime, the `MutableSingleton.reload()` will call
   * the *lazy constructor* again.
   *
   * @return Re-constructed value.
   */
  public async reload(...args: Args): Promise<T> {
    let output: T;
    await UniqueLock.lock(this.mutex_, async () => {
      output = await this.closure_(...args);
      this.value_ = output;
    });
    return output!;
  }

  /**
   * Configure value.
   *
   * The `MutableSingleton.set()` method enforces the singleton to have a specific value.
   *
   * @param value The value to configure
   */
  public async set(value: T): Promise<void> {
    await UniqueLock.lock(this.mutex_, () => {
      this.value_ = value;
    });
  }

  /**
   * Clear value.
   *
   * The `MutableSingleton.clear()` is a method clearing cached value.
   *
   * Therefore, when {@link get} being called, closure of constructor would be reused.
   */
  public async clear(): Promise<void> {
    await UniqueLock.lock(this.mutex_, () => {
      this.value_ = NOT_MOUNTED_YET;
    });
  }

  /* ---------------------------------------------------------------
        ACCESSORS
    --------------------------------------------------------------- */
  /**
   * Get promised value.
   *
   * `MutableSingleton.get()` method returns the *lazy constructed value*. It guarantees the
   * *lazy constructor* to be called *"only one at time"*. It ensures the *"only one at time"*,
   * even in the race condition.
   *
   * If the promised value is not constructed yet (call this method at the first time), the
   * *lazy constructor* would be called and returns the promised value. Otherwise, the promised
   * value has been already constructed by the *lazy constructor* (this method already had been
   * called), returns the pre-generated value.
   *
   * Also, you don't need to worry anything about the race condition, who may be occured by
   * calling the `MutableSingleton.get()` method simultaneously during the *lazy construction*
   * is on going. The `MutableSingleton` guarantees the *lazy constructor* to be called
   * only one at time by using the {@link UniqueLock.lock} on a {@link Mutex}.
   *
   * @return The *lazy constructed* value.
   */
  public async get(...args: Args): Promise<T> {
    let output: T | object = NOT_MOUNTED_YET as any;
    await SharedLock.lock(this.mutex_, async () => {
      output = this.value_;
    });

    if (output === NOT_MOUNTED_YET)
      await UniqueLock.lock(this.mutex_, async () => {
        // COULD BE COMPLETED DURING WAITING
        if (this.value_ !== NOT_MOUNTED_YET) {
          output = this.value_;
          return;
        }

        // CALL THE LAZY-CONSTRUCTOR
        output = await this.closure_(...args);
        this.value_ = output;
      });
    return output as T;
  }

  /**
   * Test whether the value has been loaded.
   *
   * The `MutableSingleton.is_loaded()` method tests whether the singleton has coompleted to
   * constructing its value or not. If the singleton value is on the construction by the
   * {@link MutableSingleton.get} or {@link MutableSingleton.reload} method, the
   * `MutableSingleton.is_loaded()` would wait returning value until the construction has been
   * completed.
   *
   * @returns Whether loaded or not
   */
  public async is_loaded(): Promise<boolean> {
    let loaded: boolean = false;
    await SharedLock.lock(this.mutex_, async () => {
      loaded = this.value_ !== NOT_MOUNTED_YET;
    });
    return loaded;
  }
}

/**
 * @hidden
 */
const NOT_MOUNTED_YET = {};
