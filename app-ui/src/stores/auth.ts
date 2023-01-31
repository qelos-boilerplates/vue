import {authorize, code} from '@qelos/web-sdk'

import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useAuth = defineStore('auth', () => {
  const loading = ref(true);
  const error = ref(null);
  const user = ref();
  const tenant = ref();

  authorize()
    .then(data => {
      user.value = data.user;
      tenant.value = data.tenant;
    })
    .catch((err) => error.value = err)
    .finally(() => loading.value = false)


  return {loading, error, user, tenant, code};
})
