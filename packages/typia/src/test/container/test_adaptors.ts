import * as std from "../../index";

export function test_priority_queue(): void {
  const adaptor: std.PriorityQueue<number> = new std.PriorityQueue();

  const elements: number[] = [];
  for (let i: number = 0; i < 10; ++i)
    for (let j: number = 0; j < 4; ++j) adaptor.push(i);
  std.ranges.shuffle(elements);

  for (let i = 0; i < 10; ++i) adaptor.pop();

  while (elements.length !== 0) {
    const index: number = std.randint(0, elements.length - 1);
    const value: number = elements[index];

    adaptor.push(value);
    elements.splice(index, 1);
  }

  let previous: number = 1000;
  while (adaptor.empty() === false) {
    if (previous < adaptor.top())
      throw new Error(
        "Bug on PriorityQueue: elements are not reversly sorted - " +
          previous.toString() +
          " < " +
          adaptor.top().toString(),
      );

    previous = adaptor.top();
    adaptor.pop();
  }
}

export function test_adaptors(): void {
  // CONSTRUCT ADAPTOR CONATINERS
  const queue = _Construct_adaptor(new std.Queue<number>());
  const stack = _Construct_adaptor(new std.Stack<number>());

  // VALIDATE QUEUE
  const queue_items: number[] = [];
  while (queue.empty() === false) {
    queue_items.push(queue.front());
    queue.pop();
  }
  _Validate_adaptor_items(queue_items, [0, 1, 2, 3, 4]);

  // VALIDATE STACK
  const stack_items: number[] = [];
  while (stack.empty() === false) {
    stack_items.push(stack.top());
    stack.pop();
  }
  _Validate_adaptor_items(stack_items, queue_items.reverse());
}

function _Construct_adaptor<T extends IAdaptor>(adaptor: T): T {
  for (let i: number = 0; i < 5; ++i) adaptor.push(i);

  return adaptor;
}

function _Validate_adaptor_items(items: number[], answer: number[]): void {
  if (items.length !== answer.length)
    throw new std.DomainError("Number of elements are wrong.");

  for (let i: number = 0; i < items.length; ++i)
    if (items[i] !== answer[i])
      throw new std.DomainError("Wrong element is inserted in.");
}

interface IAdaptor {
  push(val: number): void;
}
