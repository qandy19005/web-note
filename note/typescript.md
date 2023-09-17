## Typescript command line 
[refer] https://www.typescriptlang.org/docs/handbook/compiler-options.html
[script] tsc --project tsconfig.production.json
[des] Emit files referenced in with the compiler settings from tsconfig.production.json
--project: Compile the project given the path to its configuration file, or to a folder with a 'tsconfig.json'.

[script] tsc-alias -p tsconfig.json
[des]在 typescript 編譯後用相對路徑替換別名路徑。您可以通過提供 baseUrl 的相對路徑來添加引用 tsconfig.json 項目之外的其他項目的別名

## Typescript tsconfig file
[refer] https://ithelp.ithome.com.tw/m/articles/10263733

## Typescript Error Code
[refer] https://typescript.tv/errors/

在ts檔中宣告變數, typescript會自動定義變數類型
let word = "Hey"
word = 2 // Type 'number' is not assignable to type 'string'

## Partial<Type>
[des] 只要有部分的Type就可以
interface Props {
    a: number
    b: string
}
const obj: Partial<Props> = { a: 5 }

## Required<Type>
[des] 所有Type都要有才行
interface Props {
    a?: number
    b?: string
}
const obj: Required<Props> = { a: 5 }
Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

## Readonly<Type>
只能讀不能寫
function freeze<Type>(obj: Type): Readonly<Type>

## Pick<Type, Keys>
[des] 選擇要用的type key
interface Todo {
  title: string
  description: string
  completed: boolean
}
 
type TodoPreview = Pick<Todo, "title" | "completed">

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

## Omit<Type, Keys>
[des] 刪除不要用的key
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};

## ReturnType<typeof myFunction>
[des] 定義一個新的object type
[example] ReturnType<typeof UserApiFactory>

## Parameters<typeof myFunction>
[example]
const myFunction = (a: string, b: string) => {
    return a + b;
}

type aType = Parameters<typeof myFunction>[0]
type bType = Parameters<typeof myFunction>[1]

let a:aType = 'hello '
let b:bType = 'world'

myFunction(a, b)

## Index Signatures
[example]
type Person = {
  firstName: string;
  lastName: string;
  age: number;
};
如果key不重要可以換成
type PersonDict = {
  // "key" 可以是取成任何名稱
  [key: string]: string | number;
};

## Mapped Type
[example]
type Device = {
  [P in 'apple' | 'samsung' | 'google']: string;
};
等於
type Device = {
  apple: string;
  samsung: string;
  pixel: string;
};

## 泛型
[des] 不預先指定型別，使用時才指定
[example]
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
[refer] https://willh.gitbook.io/typescript-tutorial/advanced/generics

## function type
[des] 宣告function並使用裡面物件當作type
[example]
// BikeApi is a function
type bikeApi = ReturnType<typeof BikeApi>

## instanceof
[des] 型別有多種可能，判斷某一種並使用
[example]
} catch(error) { // error有多種可能
  if (error instanceof AxiosError) { // 若為AxiosError則執行
    snackbarStore.setErrorMsg(error.response?.data.message)
  }
  throw error as Error
}

## as type
[des] options是string 但在第5行的item不能用string放進convertReleaseNoteStatus所以使用convertReleaseNoteStatus變數所使用的type可利用as
1. const getFloatingFilter = (options: string[], field: TableFields): Partial<Column<FwRow>> => {
2.    console.log(options)
3.    options.sort((a, b) => a.localeCompare(b))
4.    const optionsResult = field === TableFields.RELEASE_NOTE_STATUS ? 
5.      options.map(item => ({ value: item, label: convertReleaseNoteStatus(item as ReleaseNoteStatus) })):
6.      options.map(item => ({ value: item, label: item }))
7.    return {
8.      floatingFilterComponent: FloatingFilter,

## enum
enum 可用 keyOf
## enum as type
[des] 宣告enum為可用型別
[example]
1. import type { SwitchSize } from "@/types/enums" // if you dont use enum as constant
2. type Size = SwitchSize.Small | SwitchSize.Large

## Record
[des] type當作key與另一個type當作value合併
參考: https://pjchender.dev/ironman-2021/ironman-2021-day17/
type Record<K extends keyof any, T> = {
  [P in K]: T
}

[example]
type AnimalType = "Cat" | "Dog" | "Pig"
type Animal = {
  name: string
  age: number
  color: string
}

const AnimalMap = Record<AnimalType, Animal>
AnimalMap type will be like:
{
  Cat: Animal
  Dog: Animal
  Pig: Animal
}