import { User } from "./../00_domain/user/type";
import { AuthError } from "./errors";
import { GenericError } from "./../20_service/api/model";
import { SignUpDTO } from "./ports";
import { useMutation } from '@tanstack/vue-query'
import { useAuthService } from './../20_service/authAdaptor'

export const useSignUp = () => {
  const { signUp } = useAuthService()
  return useMutation<User, AuthError, SignUpDTO>({
    mutationFn: async ({ name, email, password }: SignUpDTO) => {
      try {
        const res = await signUp({ name, email, password });
        return res;
      } catch (e) {
        if (e instanceof GenericError)
          throw new AuthError(e.message)
        throw new AuthError('Unknown error')
      }
    }
  })
}
