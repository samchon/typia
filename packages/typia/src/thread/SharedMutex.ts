//================================================================

/**
 * @packageDocumentation
 * @module std
 */
//================================================================
import { ISharedLockable } from "../base/thread/ISharedLockable";
import { SharedTimedMutex } from "./SharedTimedMutex";

/**
 * Shared mutex.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export class SharedMutex implements ISharedLockable {
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
        WRITE LOCK
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

  /* ---------------------------------------------------------
        READ LOCK
    --------------------------------------------------------- */
  /**
   * @inheritDoc
   */
  public lock_shared(): Promise<void> {
    return this.mutex_.lock_shared();
  }

  /**
   * @inheritDoc
   */
  public try_lock_shared(): Promise<boolean> {
    return this.mutex_.try_lock_shared();
  }

  /**
   * @inheritDoc
   */
  public unlock_shared(): Promise<void> {
    return this.mutex_.unlock_shared();
  }
}
