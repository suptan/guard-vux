export interface GuardianApiContent {
  id: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
}

export interface GuardianApiResponse {
  status: string
  userTier: string
  total: number
  content?: GuardianApiContent
}

export interface ArticleApiParams {
  id: string
  filters: object
}

export interface Article {
  response?: GuardianApiResponse
}

export interface ArticleState extends Article {
  isFetching: boolean;
  errorMsg?: string;
}
