// https://www.youtube.com/watch?v=SpQDK74vLKo&list=PLdTPrJkdrLGGgSnXMsO-Rix3MTuySb_mF&index=5

type GetStatus<T> = T extends object ? T extends {status: string} ? T['status'] : null : null

type Status = GetStatus<{status: "2"}>

const r: Status = "2"
