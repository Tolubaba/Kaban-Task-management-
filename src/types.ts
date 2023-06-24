export interface Id {
    id:string |number
} 


export interface Subtask{

    title:string
    isCompleted:boolean
    id:Id

}


export interface Tasktype{
    id:Id
    title:string
    description:string
    status:string
    statusId:Id
    subtask:Subtask[]
}

export interface Columntype{

    id:Id
    name:string
    task: Tasktype[]
}

export interface Boardtype{
    id: Id
    name:string
    columns: Columntype[]

}

export interface Localstoragetype{

    boards:Boardtype[]
    boardsid:Id[]
    currentboardid:Id
}