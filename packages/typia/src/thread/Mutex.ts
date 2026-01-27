//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ILockable } from "../base/thread/ILockable";
import { SharedTimedMutex } from "./SharedTimedMutex";

/**
 * Mutex.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class Mutex implements ILockable {
  private mutex_: SharedTimedMutex;

  /* ---------------------------------------------------------
        CONSTRUCTOR
    --------------------------------------------------------- */
  /**
   * Default Constructor.
   */
  public constructor() {
    this.mutex_ = new SharedTimedMutex(this);
  }

  /* ---------------------------------------------------------
        LOCK & UNLOCK
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public lock(): Promise<void> {
    return this.mutex_.lock();
  }

  /**
   * @inheritDoc
   */
  public try_lock(): Promise<boolean> {
    return this.mutex_.try_lock();
  }

  /**
   * @inheritDoc
   */
  public unlock(): Promise<void> {
    return this.mutex_.unlock();
  }
}
