/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * afabl oauth2 Admin API
 * OpenAPI spec version: 1.0.0
 */
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import axios from 'axios'
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
export interface UpdatedClient {
  /** @minimum 60 */
  accessTokenValidity?: number;
  disableRefreshToken?: boolean;
  /** @minLength 1 */
  name?: string;
  /** @minItems 1 */
  redirectUris?: string[];
  refreshRefreshToken?: boolean;
  /** @minimum 60 */
  refreshTokenValidity?: number;
}

export type ClientsItem = {
  /** @minLength 1 */
  id: string;
  /** @minLength 1 */
  name: string;
};

export type Clients = ClientsItem[];

export interface NewClient {
  /** @minimum 60 */
  accessTokenValidity?: number;
  disableRefreshToken?: boolean;
  /** @minLength 1 */
  name: string;
  /** @minItems 1 */
  redirectUris: string[];
  refreshRefreshToken?: boolean;
  /** @minimum 60 */
  refreshTokenValidity?: number;
}

export interface Error {
  code: number;
  message: string;
}

export interface Client {
  /** @minimum 60 */
  accessTokenValidity?: number;
  disableRefreshToken?: boolean;
  /** @minLength 1 */
  id: string;
  /** @minLength 1 */
  name: string;
  /** @minItems 1 */
  redirectUris: string[];
  refreshRefreshToken?: boolean;
  /** @minimum 60 */
  refreshTokenValidity?: number;
  /** @minLength 1 */
  secret: string;
}





export const getClientsClientId = (
    clientId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Client>> => {
    
    return axios.get(
      `https://hono-oath2-admin-api.david-e-rhoderick.workers.dev/clients/${clientId}`,options
    );
  }


export const getGetClientsClientIdQueryKey = (clientId: string,) => {
    return [`https://hono-oath2-admin-api.david-e-rhoderick.workers.dev/clients/${clientId}`] as const;
    }

    
export const getGetClientsClientIdQueryOptions = <TData = Awaited<ReturnType<typeof getClientsClientId>>, TError = AxiosError<Error>>(clientId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClientsClientId>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetClientsClientIdQueryKey(clientId);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getClientsClientId>>> = ({ signal }) => getClientsClientId(clientId, { signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, enabled: !!(clientId), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getClientsClientId>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetClientsClientIdQueryResult = NonNullable<Awaited<ReturnType<typeof getClientsClientId>>>
export type GetClientsClientIdQueryError = AxiosError<Error>


export function useGetClientsClientId<TData = Awaited<ReturnType<typeof getClientsClientId>>, TError = AxiosError<Error>>(
 clientId: string, options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClientsClientId>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getClientsClientId>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetClientsClientId<TData = Awaited<ReturnType<typeof getClientsClientId>>, TError = AxiosError<Error>>(
 clientId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClientsClientId>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getClientsClientId>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetClientsClientId<TData = Awaited<ReturnType<typeof getClientsClientId>>, TError = AxiosError<Error>>(
 clientId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClientsClientId>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetClientsClientId<TData = Awaited<ReturnType<typeof getClientsClientId>>, TError = AxiosError<Error>>(
 clientId: string, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClientsClientId>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetClientsClientIdQueryOptions(clientId,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const patchClientsClientId = (
    clientId: string,
    updatedClient: UpdatedClient, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Client>> => {
    
    return axios.patch(
      `https://hono-oath2-admin-api.david-e-rhoderick.workers.dev/clients/${clientId}`,
      updatedClient,options
    );
  }



export const getPatchClientsClientIdMutationOptions = <TError = AxiosError<Error>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchClientsClientId>>, TError,{clientId: string;data: UpdatedClient}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof patchClientsClientId>>, TError,{clientId: string;data: UpdatedClient}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof patchClientsClientId>>, {clientId: string;data: UpdatedClient}> = (props) => {
          const {clientId,data} = props ?? {};

          return  patchClientsClientId(clientId,data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PatchClientsClientIdMutationResult = NonNullable<Awaited<ReturnType<typeof patchClientsClientId>>>
    export type PatchClientsClientIdMutationBody = UpdatedClient
    export type PatchClientsClientIdMutationError = AxiosError<Error>

    export const usePatchClientsClientId = <TError = AxiosError<Error>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof patchClientsClientId>>, TError,{clientId: string;data: UpdatedClient}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof patchClientsClientId>>,
        TError,
        {clientId: string;data: UpdatedClient},
        TContext
      > => {

      const mutationOptions = getPatchClientsClientIdMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const deleteClientsClientId = (
    clientId: string, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<void>> => {
    
    return axios.delete(
      `https://hono-oath2-admin-api.david-e-rhoderick.workers.dev/clients/${clientId}`,options
    );
  }



export const getDeleteClientsClientIdMutationOptions = <TError = AxiosError<Error>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteClientsClientId>>, TError,{clientId: string}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof deleteClientsClientId>>, TError,{clientId: string}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteClientsClientId>>, {clientId: string}> = (props) => {
          const {clientId} = props ?? {};

          return  deleteClientsClientId(clientId,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type DeleteClientsClientIdMutationResult = NonNullable<Awaited<ReturnType<typeof deleteClientsClientId>>>
    
    export type DeleteClientsClientIdMutationError = AxiosError<Error>

    export const useDeleteClientsClientId = <TError = AxiosError<Error>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteClientsClientId>>, TError,{clientId: string}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof deleteClientsClientId>>,
        TError,
        {clientId: string},
        TContext
      > => {

      const mutationOptions = getDeleteClientsClientIdMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const postClients = (
    newClient: NewClient, options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Client>> => {
    
    return axios.post(
      `https://hono-oath2-admin-api.david-e-rhoderick.workers.dev/clients`,
      newClient,options
    );
  }



export const getPostClientsMutationOptions = <TError = AxiosError<Error>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postClients>>, TError,{data: NewClient}, TContext>, axios?: AxiosRequestConfig}
): UseMutationOptions<Awaited<ReturnType<typeof postClients>>, TError,{data: NewClient}, TContext> => {
const {mutation: mutationOptions, axios: axiosOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof postClients>>, {data: NewClient}> = (props) => {
          const {data} = props ?? {};

          return  postClients(data,axiosOptions)
        }

        


  return  { mutationFn, ...mutationOptions }}

    export type PostClientsMutationResult = NonNullable<Awaited<ReturnType<typeof postClients>>>
    export type PostClientsMutationBody = NewClient
    export type PostClientsMutationError = AxiosError<Error>

    export const usePostClients = <TError = AxiosError<Error>,
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof postClients>>, TError,{data: NewClient}, TContext>, axios?: AxiosRequestConfig}
): UseMutationResult<
        Awaited<ReturnType<typeof postClients>>,
        TError,
        {data: NewClient},
        TContext
      > => {

      const mutationOptions = getPostClientsMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const getClients = (
     options?: AxiosRequestConfig
 ): Promise<AxiosResponse<Clients>> => {
    
    return axios.get(
      `https://hono-oath2-admin-api.david-e-rhoderick.workers.dev/clients`,options
    );
  }


export const getGetClientsQueryKey = () => {
    return [`https://hono-oath2-admin-api.david-e-rhoderick.workers.dev/clients`] as const;
    }

    
export const getGetClientsQueryOptions = <TData = Awaited<ReturnType<typeof getClients>>, TError = AxiosError<Error>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClients>>, TError, TData>>, axios?: AxiosRequestConfig}
) => {

const {query: queryOptions, axios: axiosOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetClientsQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getClients>>> = ({ signal }) => getClients({ signal, ...axiosOptions });

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getClients>>, TError, TData> & { queryKey: DataTag<QueryKey, TData> }
}

export type GetClientsQueryResult = NonNullable<Awaited<ReturnType<typeof getClients>>>
export type GetClientsQueryError = AxiosError<Error>


export function useGetClients<TData = Awaited<ReturnType<typeof getClients>>, TError = AxiosError<Error>>(
  options: { query:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClients>>, TError, TData>> & Pick<
        DefinedInitialDataOptions<
          Awaited<ReturnType<typeof getClients>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetClients<TData = Awaited<ReturnType<typeof getClients>>, TError = AxiosError<Error>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClients>>, TError, TData>> & Pick<
        UndefinedInitialDataOptions<
          Awaited<ReturnType<typeof getClients>>,
          TError,
          TData
        > , 'initialData'
      >, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }
export function useGetClients<TData = Awaited<ReturnType<typeof getClients>>, TError = AxiosError<Error>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClients>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> }

export function useGetClients<TData = Awaited<ReturnType<typeof getClients>>, TError = AxiosError<Error>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getClients>>, TError, TData>>, axios?: AxiosRequestConfig}

  ):  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> } {

  const queryOptions = getGetClientsQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData> };

  query.queryKey = queryOptions.queryKey ;

  return query;
}






export const getGetClientsClientIdResponseMock = (overrideResponse: Partial< Client > = {}): Client => ({accessTokenValidity: faker.helpers.arrayElement([faker.number.int({min: 60, max: undefined}), undefined]), disableRefreshToken: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), id: faker.string.alpha(20), name: faker.string.alpha(20), redirectUris: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.internet.url())), refreshRefreshToken: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), refreshTokenValidity: faker.helpers.arrayElement([faker.number.int({min: 60, max: undefined}), undefined]), secret: faker.string.alpha(20), ...overrideResponse})

export const getPatchClientsClientIdResponseMock = (overrideResponse: Partial< Client > = {}): Client => ({accessTokenValidity: faker.helpers.arrayElement([faker.number.int({min: 60, max: undefined}), undefined]), disableRefreshToken: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), id: faker.string.alpha(20), name: faker.string.alpha(20), redirectUris: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.internet.url())), refreshRefreshToken: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), refreshTokenValidity: faker.helpers.arrayElement([faker.number.int({min: 60, max: undefined}), undefined]), secret: faker.string.alpha(20), ...overrideResponse})

export const getPostClientsResponseMock = (overrideResponse: Partial< Client > = {}): Client => ({accessTokenValidity: faker.helpers.arrayElement([faker.number.int({min: 60, max: undefined}), undefined]), disableRefreshToken: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), id: faker.string.alpha(20), name: faker.string.alpha(20), redirectUris: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.internet.url())), refreshRefreshToken: faker.helpers.arrayElement([faker.datatype.boolean(), undefined]), refreshTokenValidity: faker.helpers.arrayElement([faker.number.int({min: 60, max: undefined}), undefined]), secret: faker.string.alpha(20), ...overrideResponse})

export const getGetClientsResponseMock = (): Clients => (Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.string.alpha(20), name: faker.string.alpha(20)})))


export const getGetClientsClientIdMockHandler = (overrideResponse?: Client | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Client> | Client)) => {
  return http.get('*/clients/:clientId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetClientsClientIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getPatchClientsClientIdMockHandler = (overrideResponse?: Client | ((info: Parameters<Parameters<typeof http.patch>[1]>[0]) => Promise<Client> | Client)) => {
  return http.patch('*/clients/:clientId', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getPatchClientsClientIdResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getDeleteClientsClientIdMockHandler = (overrideResponse?: void | ((info: Parameters<Parameters<typeof http.delete>[1]>[0]) => Promise<void> | void)) => {
  return http.delete('*/clients/:clientId', async (info) => {await delay(1000);
  if (typeof overrideResponse === 'function') {await overrideResponse(info); }
    return new HttpResponse(null,
      { status: 200,
        
      })
  })
}

export const getPostClientsMockHandler = (overrideResponse?: Client | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<Client> | Client)) => {
  return http.post('*/clients', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getPostClientsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetClientsMockHandler = (overrideResponse?: Clients | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<Clients> | Clients)) => {
  return http.get('*/clients', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetClientsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}
export const getAfablOauth2AdminAPIMock = () => [
  getGetClientsClientIdMockHandler(),
  getPatchClientsClientIdMockHandler(),
  getDeleteClientsClientIdMockHandler(),
  getPostClientsMockHandler(),
  getGetClientsMockHandler()
]