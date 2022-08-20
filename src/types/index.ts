export interface ILink {
  id: number
  title: string
  url: any
  icon: string
}

export interface Jobs {
  id: number
  logo: string
  name: string
  function: string
  functions: Array<string>
  tags: Array<string>
}
