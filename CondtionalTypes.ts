// https://www.youtube.com/watch?v=SpQDK74vLKo&list=PLdTPrJkdrLGGgSnXMsO-Rix3MTuySb_mF&index=5

type GetStatus<T> = T extends object ? T extends {status: string} ? T['status'] : null : null

type Status = GetStatus<{status: "2"}>

const r: Status = "2"


// Simplifier example above

type TryInfer<T extends object = object> = T extends infer R ? R[keyof R]: null

type R = TryInfer<{a: 1, b: 2}>

const rr: R = 2


// example of trying to infer return type of any function
function test () {
  return 2
}

type FunctionResult<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any

type Q = FunctionResult<typeof test>

const anyNumber: Q = 555
