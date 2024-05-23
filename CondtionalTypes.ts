// https://www.youtube.com/watch?v=SpQDK74vLKo&list=PLdTPrJkdrLGGgSnXMsO-Rix3MTuySb_mF&index=5

type GetStatus<T> = T extends object ? T extends {status: string} ? T['status'] : null : null

type Status = GetStatus<{status: "2"}>

const r: Status = "2"


// Simplifier example above

type TryInfer<T extends object = object> = T extends infer R ? R[keyof R]: null

type R = TryInfer<{a: 1, b: 2}>

const rr: R = 2


// example of trying to infer return type of any function
// https://github.com/microsoft/TypeScript/blob/main/src/lib/es5.d.ts#L1625
function test () {
  return 2
}

type FunctionResult<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type Q = FunctionResult<typeof test>

const anyNumber: Q = 555


// QUESTION:
type T<A> = A extends [infer U, 1] | [1, infer U] ? U : never;
type F = T<[1, 2]>;
//  F type 2 | 1 - WHY NOT ONLY 2 ? WTF ?!

type T<A> = A extends [infer U, 1] | [1, infer U, infer U] ? U : never;
type F = T<[1, 2, 3]>;
