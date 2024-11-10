import { assertEquals } from 'https://deno.land/std/assert/assert_equals.ts';
import { FibonacciSequenceService } from './fibonacci-sequence.service.ts';

Deno.test('FibonacciSequenceService.isFibonacci - start from default 3', () => {
  const fibSeqService = new FibonacciSequenceService();

  assertEquals(fibSeqService.isFibonacci(-1), false);
  assertEquals(fibSeqService.isFibonacci(0), false);
  assertEquals(fibSeqService.isFibonacci(1), false);
  assertEquals(fibSeqService.isFibonacci(2), false);
  assertEquals(fibSeqService.isFibonacci(3), true);
  assertEquals(fibSeqService.isFibonacci(4), false);
  assertEquals(fibSeqService.isFibonacci(5), true);
  assertEquals(fibSeqService.isFibonacci(6), false);
  assertEquals(fibSeqService.isFibonacci(7), false);
  assertEquals(fibSeqService.isFibonacci(8), true);
});

Deno.test(
  'FibonacciSequenceService.isFibonacci when startFrom param = 0',
  () => {
    const fibSeqService = new FibonacciSequenceService(0);

    assertEquals(fibSeqService.isFibonacci(-1), false);
    assertEquals(fibSeqService.isFibonacci(0), true);
    assertEquals(fibSeqService.isFibonacci(1), true);
    assertEquals(fibSeqService.isFibonacci(2), true);
    assertEquals(fibSeqService.isFibonacci(3), true);
    assertEquals(fibSeqService.isFibonacci(4), false);
    assertEquals(fibSeqService.isFibonacci(5), true);
    assertEquals(fibSeqService.isFibonacci(6), false);
    assertEquals(fibSeqService.isFibonacci(7), false);
    assertEquals(fibSeqService.isFibonacci(8), true);
  },
);
