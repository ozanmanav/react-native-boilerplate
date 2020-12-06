import axios from 'axios'
import { Config } from '@/Config'

const instance = axios.create({
  baseURL: Config.API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 3000,
})

type HandleErrorProps = {
  message: string,
  data?: any,
  status?: string,
}

export const handleError = ({ message, data, status }: HandleErrorProps) => {
  return Promise.reject({ message, data, status })
}

instance.interceptors.response.use(
  (response) => response,
  ({ message, response: { data, status } }) => {
    return handleError({ message, data, status })
  }
)

export default instance
